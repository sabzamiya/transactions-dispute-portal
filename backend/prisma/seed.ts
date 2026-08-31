import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient, TransactionStatus, DisputeStatus } from "../src/generated/prisma";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
    throw new Error("DATABASE_URL is not configured");
}

const adapter = new PrismaPg({
    connectionString,
});

const prisma = new PrismaClient({
    adapter,
});

async function main() {
    console.log("Starting database seed");


    // Clear existing data
    await prisma.disputeHistory.deleteMany();
    await prisma.dispute.deleteMany();
    await prisma.transaction.deleteMany();
    await prisma.customer.deleteMany();

    // Create customers
    const customers = await Promise.all([
        prisma.customer.create({
            data: {
                customerNumber: "CUST100001",
                firstName: "Sabelo",
                lastName: "Miya",
                email: "sabzamiya@gmail.com"
            },
        }),

        prisma.customer.create({
            data: {
                customerNumber: "CUST100002",
                firstName: "Zethu",
                lastName: "Mkhize",
                email: "mkhizezethu@gmail.com"
            },
        }),

        prisma.customer.create({
            data: {
                customerNumber: "CUST100003",
                firstName: "Ndumiso",
                lastName: "Mbhele",
                email: "ndumbhele@gmail.com"
            },
        }),
    ]);

    console.log(`Created ${customers.length} customers`);

    const [sabelo, zethu, ndumiso] = customers;

    // Create transactions
    const transactions = await Promise.all([
        prisma.transaction.create({
            data: {
                customerId: sabelo.id,
                reference: "TXN-100001",
                amount: "1250.50",
                currency: "ZAR",
                description: "Online purchase",
                transactionDate: new Date("2026-08-20T10:30:00Z"),
                status: TransactionStatus.COMPLETED,
            },
        }),

        prisma.transaction.create({
            data: {
                customerId: sabelo.id,
                reference: "TXN-100002",
                amount: "850.00",
                currency: "ZAR",
                description: "ATM withdrawal",
                transactionDate: new Date("2026-08-21T14:15:00Z"),
                status: TransactionStatus.COMPLETED,
            },
        }),

        prisma.transaction.create({
            data: {
                customerId: sabelo.id,
                reference: "TXN-100003",
                amount: "2499.99",
                currency: "ZAR",
                description: "Card purchase",
                transactionDate: new Date("2026-08-22T09:45:00Z"),
                status: TransactionStatus.COMPLETED,
            },
        }),

        prisma.transaction.create({
            data: {
                customerId: zethu.id,
                reference: "TXN-100004",
                amount: "5000.00",
                currency: "ZAR",
                description: "Online purchase",
                transactionDate: new Date("2026-08-23T16:10:00Z"),
                status: TransactionStatus.PENDING,
            },
        }),

        prisma.transaction.create({
            data: {
                customerId: zethu.id,
                reference: "TXN-100005",
                amount: "799.99",
                currency: "ZAR",
                description: "Online purchase",
                transactionDate: new Date("2026-08-22T09:45:00Z"),
                status: TransactionStatus.COMPLETED,
            },
        }),

        prisma.transaction.create({
            data: {
                customerId: ndumiso.id,
                reference: "TXN-100006",
                amount: "3200.00",
                currency: "ZAR",
                description: "Card purchase",
                transactionDate: new Date("2026-08-19T08:00:00Z"),
                status: TransactionStatus.COMPLETED,
            },
        }),
    ]);

    console.log(`Created ${transactions.length} transactions`);

    // Create disputes
    const dispute1 = await prisma.dispute.create({
        data: {
            transactionId: transactions[0].id,
            customerId: sabelo.id,
            reason: "Transaction not recognised",
            description: "I do not recognize this transaction and would like it investigated.",
            status: DisputeStatus.SUBMITTED,
        },
    });

    const dispute2 = await prisma.dispute.create({
        data: {
            transactionId: transactions[3].id,
            customerId: zethu.id,
            reason: "Incorrect transaction amount",
            description: "The amount processed differs from the amount I expected",
            status: DisputeStatus.UNDER_REVIEW,
        },
    });

    console.log("Created disputes");

    // Create dispute history
    await prisma.disputeHistory.createMany({
        data: [
            {
                disputeId: dispute1.id,
                status: DisputeStatus.SUBMITTED,
                comment: "Dispute submitted by customer",
            },
            {
                disputeId: dispute2.id,
                status: DisputeStatus.SUBMITTED,
                comment: "Dispute submitted by customer",
            },
            {
                disputeId: dispute2.id,
                status: DisputeStatus.UNDER_REVIEW,
                comment: "Dispute is being investigated",
            },
        ],
    });

    console.log("Created dispute history");
    console.log("Database seed completed successfully");

}

main().catch((error) => {
    console.error("Seed failed:", error);
    process.exit(1);
})
.finally(async () => {
    await prisma.$disconnect();
});