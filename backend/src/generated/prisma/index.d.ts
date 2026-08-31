
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model Dispute
 * 
 */
export type Dispute = $Result.DefaultSelection<Prisma.$DisputePayload>
/**
 * Model DisputeHistory
 * 
 */
export type DisputeHistory = $Result.DefaultSelection<Prisma.$DisputeHistoryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TransactionStatus: {
  COMPLETED: 'COMPLETED',
  PENDING: 'PENDING',
  FAILED: 'FAILED',
  REVERSED: 'REVERSED'
};

export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus]


export const DisputeStatus: {
  SUBMITTED: 'SUBMITTED',
  UNDER_REVIEW: 'UNDER_REVIEW',
  ADDITIONAL_INFORMATION_REQUIRED: 'ADDITIONAL_INFORMATION_REQUIRED',
  RESOLVED: 'RESOLVED',
  REJECTED: 'REJECTED'
};

export type DisputeStatus = (typeof DisputeStatus)[keyof typeof DisputeStatus]

}

export type TransactionStatus = $Enums.TransactionStatus

export const TransactionStatus: typeof $Enums.TransactionStatus

export type DisputeStatus = $Enums.DisputeStatus

export const DisputeStatus: typeof $Enums.DisputeStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Customers
 * const customers = await prisma.customer.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Customers
   * const customers = await prisma.customer.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dispute`: Exposes CRUD operations for the **Dispute** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Disputes
    * const disputes = await prisma.dispute.findMany()
    * ```
    */
  get dispute(): Prisma.DisputeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.disputeHistory`: Exposes CRUD operations for the **DisputeHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DisputeHistories
    * const disputeHistories = await prisma.disputeHistory.findMany()
    * ```
    */
  get disputeHistory(): Prisma.DisputeHistoryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.0
   * Query Engine version: 0edf323efd1d98336f3f0a68684b56f689b900d3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Customer: 'Customer',
    Transaction: 'Transaction',
    Dispute: 'Dispute',
    DisputeHistory: 'DisputeHistory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "customer" | "transaction" | "dispute" | "disputeHistory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      Dispute: {
        payload: Prisma.$DisputePayload<ExtArgs>
        fields: Prisma.DisputeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DisputeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DisputeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputePayload>
          }
          findFirst: {
            args: Prisma.DisputeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DisputeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputePayload>
          }
          findMany: {
            args: Prisma.DisputeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputePayload>[]
          }
          create: {
            args: Prisma.DisputeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputePayload>
          }
          createMany: {
            args: Prisma.DisputeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DisputeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputePayload>[]
          }
          delete: {
            args: Prisma.DisputeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputePayload>
          }
          update: {
            args: Prisma.DisputeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputePayload>
          }
          deleteMany: {
            args: Prisma.DisputeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DisputeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DisputeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputePayload>[]
          }
          upsert: {
            args: Prisma.DisputeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputePayload>
          }
          aggregate: {
            args: Prisma.DisputeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDispute>
          }
          groupBy: {
            args: Prisma.DisputeGroupByArgs<ExtArgs>
            result: $Utils.Optional<DisputeGroupByOutputType>[]
          }
          count: {
            args: Prisma.DisputeCountArgs<ExtArgs>
            result: $Utils.Optional<DisputeCountAggregateOutputType> | number
          }
        }
      }
      DisputeHistory: {
        payload: Prisma.$DisputeHistoryPayload<ExtArgs>
        fields: Prisma.DisputeHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DisputeHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputeHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DisputeHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputeHistoryPayload>
          }
          findFirst: {
            args: Prisma.DisputeHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputeHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DisputeHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputeHistoryPayload>
          }
          findMany: {
            args: Prisma.DisputeHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputeHistoryPayload>[]
          }
          create: {
            args: Prisma.DisputeHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputeHistoryPayload>
          }
          createMany: {
            args: Prisma.DisputeHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DisputeHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputeHistoryPayload>[]
          }
          delete: {
            args: Prisma.DisputeHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputeHistoryPayload>
          }
          update: {
            args: Prisma.DisputeHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputeHistoryPayload>
          }
          deleteMany: {
            args: Prisma.DisputeHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DisputeHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DisputeHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputeHistoryPayload>[]
          }
          upsert: {
            args: Prisma.DisputeHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputeHistoryPayload>
          }
          aggregate: {
            args: Prisma.DisputeHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDisputeHistory>
          }
          groupBy: {
            args: Prisma.DisputeHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<DisputeHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.DisputeHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<DisputeHistoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    customer?: CustomerOmit
    transaction?: TransactionOmit
    dispute?: DisputeOmit
    disputeHistory?: DisputeHistoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    transactions: number
    disputes: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | CustomerCountOutputTypeCountTransactionsArgs
    disputes?: boolean | CustomerCountOutputTypeCountDisputesArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountDisputesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisputeWhereInput
  }


  /**
   * Count Type TransactionCountOutputType
   */

  export type TransactionCountOutputType = {
    disputes: number
  }

  export type TransactionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disputes?: boolean | TransactionCountOutputTypeCountDisputesArgs
  }

  // Custom InputTypes
  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionCountOutputType
     */
    select?: TransactionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeCountDisputesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisputeWhereInput
  }


  /**
   * Count Type DisputeCountOutputType
   */

  export type DisputeCountOutputType = {
    history: number
  }

  export type DisputeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    history?: boolean | DisputeCountOutputTypeCountHistoryArgs
  }

  // Custom InputTypes
  /**
   * DisputeCountOutputType without action
   */
  export type DisputeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisputeCountOutputType
     */
    select?: DisputeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DisputeCountOutputType without action
   */
  export type DisputeCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisputeHistoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    customerNumber: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    customerNumber: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    customerNumber: number
    firstName: number
    lastName: number
    email: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerMinAggregateInputType = {
    id?: true
    customerNumber?: true
    firstName?: true
    lastName?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    customerNumber?: true
    firstName?: true
    lastName?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    customerNumber?: true
    firstName?: true
    lastName?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    customerNumber: string
    firstName: string
    lastName: string
    email: string
    createdAt: Date
    updatedAt: Date
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerNumber?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    transactions?: boolean | Customer$transactionsArgs<ExtArgs>
    disputes?: boolean | Customer$disputesArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerNumber?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerNumber?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    customerNumber?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerNumber" | "firstName" | "lastName" | "email" | "createdAt" | "updatedAt", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | Customer$transactionsArgs<ExtArgs>
    disputes?: boolean | Customer$disputesArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      disputes: Prisma.$DisputePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerNumber: string
      firstName: string
      lastName: string
      email: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transactions<T extends Customer$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    disputes<T extends Customer$disputesArgs<ExtArgs> = {}>(args?: Subset<T, Customer$disputesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly customerNumber: FieldRef<"Customer", 'String'>
    readonly firstName: FieldRef<"Customer", 'String'>
    readonly lastName: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly updatedAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.transactions
   */
  export type Customer$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Customer.disputes
   */
  export type Customer$disputesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispute
     */
    omit?: DisputeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeInclude<ExtArgs> | null
    where?: DisputeWhereInput
    orderBy?: DisputeOrderByWithRelationInput | DisputeOrderByWithRelationInput[]
    cursor?: DisputeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DisputeScalarFieldEnum | DisputeScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type TransactionSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    reference: string | null
    amount: Decimal | null
    currency: string | null
    description: string | null
    transactionDate: Date | null
    status: $Enums.TransactionStatus | null
    createdAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    reference: string | null
    amount: Decimal | null
    currency: string | null
    description: string | null
    transactionDate: Date | null
    status: $Enums.TransactionStatus | null
    createdAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    customerId: number
    reference: number
    amount: number
    currency: number
    description: number
    transactionDate: number
    status: number
    createdAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    amount?: true
  }

  export type TransactionSumAggregateInputType = {
    amount?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    customerId?: true
    reference?: true
    amount?: true
    currency?: true
    description?: true
    transactionDate?: true
    status?: true
    createdAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    customerId?: true
    reference?: true
    amount?: true
    currency?: true
    description?: true
    transactionDate?: true
    status?: true
    createdAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    customerId?: true
    reference?: true
    amount?: true
    currency?: true
    description?: true
    transactionDate?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    customerId: string
    reference: string
    amount: Decimal
    currency: string
    description: string
    transactionDate: Date
    status: $Enums.TransactionStatus
    createdAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    reference?: boolean
    amount?: boolean
    currency?: boolean
    description?: boolean
    transactionDate?: boolean
    status?: boolean
    createdAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    disputes?: boolean | Transaction$disputesArgs<ExtArgs>
    _count?: boolean | TransactionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    reference?: boolean
    amount?: boolean
    currency?: boolean
    description?: boolean
    transactionDate?: boolean
    status?: boolean
    createdAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    reference?: boolean
    amount?: boolean
    currency?: boolean
    description?: boolean
    transactionDate?: boolean
    status?: boolean
    createdAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    customerId?: boolean
    reference?: boolean
    amount?: boolean
    currency?: boolean
    description?: boolean
    transactionDate?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerId" | "reference" | "amount" | "currency" | "description" | "transactionDate" | "status" | "createdAt", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    disputes?: boolean | Transaction$disputesArgs<ExtArgs>
    _count?: boolean | TransactionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      disputes: Prisma.$DisputePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string
      reference: string
      amount: Prisma.Decimal
      currency: string
      description: string
      transactionDate: Date
      status: $Enums.TransactionStatus
      createdAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    disputes<T extends Transaction$disputesArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$disputesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly customerId: FieldRef<"Transaction", 'String'>
    readonly reference: FieldRef<"Transaction", 'String'>
    readonly amount: FieldRef<"Transaction", 'Decimal'>
    readonly currency: FieldRef<"Transaction", 'String'>
    readonly description: FieldRef<"Transaction", 'String'>
    readonly transactionDate: FieldRef<"Transaction", 'DateTime'>
    readonly status: FieldRef<"Transaction", 'TransactionStatus'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction.disputes
   */
  export type Transaction$disputesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispute
     */
    omit?: DisputeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeInclude<ExtArgs> | null
    where?: DisputeWhereInput
    orderBy?: DisputeOrderByWithRelationInput | DisputeOrderByWithRelationInput[]
    cursor?: DisputeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DisputeScalarFieldEnum | DisputeScalarFieldEnum[]
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model Dispute
   */

  export type AggregateDispute = {
    _count: DisputeCountAggregateOutputType | null
    _min: DisputeMinAggregateOutputType | null
    _max: DisputeMaxAggregateOutputType | null
  }

  export type DisputeMinAggregateOutputType = {
    id: string | null
    transactionId: string | null
    customerId: string | null
    reason: string | null
    description: string | null
    status: $Enums.DisputeStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    resolvedAt: Date | null
  }

  export type DisputeMaxAggregateOutputType = {
    id: string | null
    transactionId: string | null
    customerId: string | null
    reason: string | null
    description: string | null
    status: $Enums.DisputeStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    resolvedAt: Date | null
  }

  export type DisputeCountAggregateOutputType = {
    id: number
    transactionId: number
    customerId: number
    reason: number
    description: number
    status: number
    createdAt: number
    updatedAt: number
    resolvedAt: number
    _all: number
  }


  export type DisputeMinAggregateInputType = {
    id?: true
    transactionId?: true
    customerId?: true
    reason?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    resolvedAt?: true
  }

  export type DisputeMaxAggregateInputType = {
    id?: true
    transactionId?: true
    customerId?: true
    reason?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    resolvedAt?: true
  }

  export type DisputeCountAggregateInputType = {
    id?: true
    transactionId?: true
    customerId?: true
    reason?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    resolvedAt?: true
    _all?: true
  }

  export type DisputeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dispute to aggregate.
     */
    where?: DisputeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disputes to fetch.
     */
    orderBy?: DisputeOrderByWithRelationInput | DisputeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DisputeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disputes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disputes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Disputes
    **/
    _count?: true | DisputeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DisputeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DisputeMaxAggregateInputType
  }

  export type GetDisputeAggregateType<T extends DisputeAggregateArgs> = {
        [P in keyof T & keyof AggregateDispute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDispute[P]>
      : GetScalarType<T[P], AggregateDispute[P]>
  }




  export type DisputeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisputeWhereInput
    orderBy?: DisputeOrderByWithAggregationInput | DisputeOrderByWithAggregationInput[]
    by: DisputeScalarFieldEnum[] | DisputeScalarFieldEnum
    having?: DisputeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DisputeCountAggregateInputType | true
    _min?: DisputeMinAggregateInputType
    _max?: DisputeMaxAggregateInputType
  }

  export type DisputeGroupByOutputType = {
    id: string
    transactionId: string
    customerId: string
    reason: string
    description: string
    status: $Enums.DisputeStatus
    createdAt: Date
    updatedAt: Date
    resolvedAt: Date | null
    _count: DisputeCountAggregateOutputType | null
    _min: DisputeMinAggregateOutputType | null
    _max: DisputeMaxAggregateOutputType | null
  }

  type GetDisputeGroupByPayload<T extends DisputeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DisputeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DisputeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DisputeGroupByOutputType[P]>
            : GetScalarType<T[P], DisputeGroupByOutputType[P]>
        }
      >
    >


  export type DisputeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transactionId?: boolean
    customerId?: boolean
    reason?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resolvedAt?: boolean
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    history?: boolean | Dispute$historyArgs<ExtArgs>
    _count?: boolean | DisputeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dispute"]>

  export type DisputeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transactionId?: boolean
    customerId?: boolean
    reason?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resolvedAt?: boolean
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dispute"]>

  export type DisputeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transactionId?: boolean
    customerId?: boolean
    reason?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resolvedAt?: boolean
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dispute"]>

  export type DisputeSelectScalar = {
    id?: boolean
    transactionId?: boolean
    customerId?: boolean
    reason?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resolvedAt?: boolean
  }

  export type DisputeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "transactionId" | "customerId" | "reason" | "description" | "status" | "createdAt" | "updatedAt" | "resolvedAt", ExtArgs["result"]["dispute"]>
  export type DisputeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    history?: boolean | Dispute$historyArgs<ExtArgs>
    _count?: boolean | DisputeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DisputeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type DisputeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $DisputePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dispute"
    objects: {
      transaction: Prisma.$TransactionPayload<ExtArgs>
      customer: Prisma.$CustomerPayload<ExtArgs>
      history: Prisma.$DisputeHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      transactionId: string
      customerId: string
      reason: string
      description: string
      status: $Enums.DisputeStatus
      createdAt: Date
      updatedAt: Date
      resolvedAt: Date | null
    }, ExtArgs["result"]["dispute"]>
    composites: {}
  }

  type DisputeGetPayload<S extends boolean | null | undefined | DisputeDefaultArgs> = $Result.GetResult<Prisma.$DisputePayload, S>

  type DisputeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DisputeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DisputeCountAggregateInputType | true
    }

  export interface DisputeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dispute'], meta: { name: 'Dispute' } }
    /**
     * Find zero or one Dispute that matches the filter.
     * @param {DisputeFindUniqueArgs} args - Arguments to find a Dispute
     * @example
     * // Get one Dispute
     * const dispute = await prisma.dispute.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DisputeFindUniqueArgs>(args: SelectSubset<T, DisputeFindUniqueArgs<ExtArgs>>): Prisma__DisputeClient<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dispute that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DisputeFindUniqueOrThrowArgs} args - Arguments to find a Dispute
     * @example
     * // Get one Dispute
     * const dispute = await prisma.dispute.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DisputeFindUniqueOrThrowArgs>(args: SelectSubset<T, DisputeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DisputeClient<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dispute that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisputeFindFirstArgs} args - Arguments to find a Dispute
     * @example
     * // Get one Dispute
     * const dispute = await prisma.dispute.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DisputeFindFirstArgs>(args?: SelectSubset<T, DisputeFindFirstArgs<ExtArgs>>): Prisma__DisputeClient<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dispute that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisputeFindFirstOrThrowArgs} args - Arguments to find a Dispute
     * @example
     * // Get one Dispute
     * const dispute = await prisma.dispute.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DisputeFindFirstOrThrowArgs>(args?: SelectSubset<T, DisputeFindFirstOrThrowArgs<ExtArgs>>): Prisma__DisputeClient<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Disputes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisputeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Disputes
     * const disputes = await prisma.dispute.findMany()
     * 
     * // Get first 10 Disputes
     * const disputes = await prisma.dispute.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const disputeWithIdOnly = await prisma.dispute.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DisputeFindManyArgs>(args?: SelectSubset<T, DisputeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dispute.
     * @param {DisputeCreateArgs} args - Arguments to create a Dispute.
     * @example
     * // Create one Dispute
     * const Dispute = await prisma.dispute.create({
     *   data: {
     *     // ... data to create a Dispute
     *   }
     * })
     * 
     */
    create<T extends DisputeCreateArgs>(args: SelectSubset<T, DisputeCreateArgs<ExtArgs>>): Prisma__DisputeClient<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Disputes.
     * @param {DisputeCreateManyArgs} args - Arguments to create many Disputes.
     * @example
     * // Create many Disputes
     * const dispute = await prisma.dispute.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DisputeCreateManyArgs>(args?: SelectSubset<T, DisputeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Disputes and returns the data saved in the database.
     * @param {DisputeCreateManyAndReturnArgs} args - Arguments to create many Disputes.
     * @example
     * // Create many Disputes
     * const dispute = await prisma.dispute.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Disputes and only return the `id`
     * const disputeWithIdOnly = await prisma.dispute.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DisputeCreateManyAndReturnArgs>(args?: SelectSubset<T, DisputeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dispute.
     * @param {DisputeDeleteArgs} args - Arguments to delete one Dispute.
     * @example
     * // Delete one Dispute
     * const Dispute = await prisma.dispute.delete({
     *   where: {
     *     // ... filter to delete one Dispute
     *   }
     * })
     * 
     */
    delete<T extends DisputeDeleteArgs>(args: SelectSubset<T, DisputeDeleteArgs<ExtArgs>>): Prisma__DisputeClient<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dispute.
     * @param {DisputeUpdateArgs} args - Arguments to update one Dispute.
     * @example
     * // Update one Dispute
     * const dispute = await prisma.dispute.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DisputeUpdateArgs>(args: SelectSubset<T, DisputeUpdateArgs<ExtArgs>>): Prisma__DisputeClient<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Disputes.
     * @param {DisputeDeleteManyArgs} args - Arguments to filter Disputes to delete.
     * @example
     * // Delete a few Disputes
     * const { count } = await prisma.dispute.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DisputeDeleteManyArgs>(args?: SelectSubset<T, DisputeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disputes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisputeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Disputes
     * const dispute = await prisma.dispute.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DisputeUpdateManyArgs>(args: SelectSubset<T, DisputeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disputes and returns the data updated in the database.
     * @param {DisputeUpdateManyAndReturnArgs} args - Arguments to update many Disputes.
     * @example
     * // Update many Disputes
     * const dispute = await prisma.dispute.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Disputes and only return the `id`
     * const disputeWithIdOnly = await prisma.dispute.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DisputeUpdateManyAndReturnArgs>(args: SelectSubset<T, DisputeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dispute.
     * @param {DisputeUpsertArgs} args - Arguments to update or create a Dispute.
     * @example
     * // Update or create a Dispute
     * const dispute = await prisma.dispute.upsert({
     *   create: {
     *     // ... data to create a Dispute
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dispute we want to update
     *   }
     * })
     */
    upsert<T extends DisputeUpsertArgs>(args: SelectSubset<T, DisputeUpsertArgs<ExtArgs>>): Prisma__DisputeClient<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Disputes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisputeCountArgs} args - Arguments to filter Disputes to count.
     * @example
     * // Count the number of Disputes
     * const count = await prisma.dispute.count({
     *   where: {
     *     // ... the filter for the Disputes we want to count
     *   }
     * })
    **/
    count<T extends DisputeCountArgs>(
      args?: Subset<T, DisputeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DisputeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dispute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisputeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DisputeAggregateArgs>(args: Subset<T, DisputeAggregateArgs>): Prisma.PrismaPromise<GetDisputeAggregateType<T>>

    /**
     * Group by Dispute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisputeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DisputeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DisputeGroupByArgs['orderBy'] }
        : { orderBy?: DisputeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DisputeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDisputeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dispute model
   */
  readonly fields: DisputeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dispute.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DisputeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transaction<T extends TransactionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TransactionDefaultArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    history<T extends Dispute$historyArgs<ExtArgs> = {}>(args?: Subset<T, Dispute$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisputeHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Dispute model
   */
  interface DisputeFieldRefs {
    readonly id: FieldRef<"Dispute", 'String'>
    readonly transactionId: FieldRef<"Dispute", 'String'>
    readonly customerId: FieldRef<"Dispute", 'String'>
    readonly reason: FieldRef<"Dispute", 'String'>
    readonly description: FieldRef<"Dispute", 'String'>
    readonly status: FieldRef<"Dispute", 'DisputeStatus'>
    readonly createdAt: FieldRef<"Dispute", 'DateTime'>
    readonly updatedAt: FieldRef<"Dispute", 'DateTime'>
    readonly resolvedAt: FieldRef<"Dispute", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Dispute findUnique
   */
  export type DisputeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispute
     */
    omit?: DisputeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeInclude<ExtArgs> | null
    /**
     * Filter, which Dispute to fetch.
     */
    where: DisputeWhereUniqueInput
  }

  /**
   * Dispute findUniqueOrThrow
   */
  export type DisputeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispute
     */
    omit?: DisputeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeInclude<ExtArgs> | null
    /**
     * Filter, which Dispute to fetch.
     */
    where: DisputeWhereUniqueInput
  }

  /**
   * Dispute findFirst
   */
  export type DisputeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispute
     */
    omit?: DisputeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeInclude<ExtArgs> | null
    /**
     * Filter, which Dispute to fetch.
     */
    where?: DisputeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disputes to fetch.
     */
    orderBy?: DisputeOrderByWithRelationInput | DisputeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disputes.
     */
    cursor?: DisputeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disputes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disputes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disputes.
     */
    distinct?: DisputeScalarFieldEnum | DisputeScalarFieldEnum[]
  }

  /**
   * Dispute findFirstOrThrow
   */
  export type DisputeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispute
     */
    omit?: DisputeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeInclude<ExtArgs> | null
    /**
     * Filter, which Dispute to fetch.
     */
    where?: DisputeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disputes to fetch.
     */
    orderBy?: DisputeOrderByWithRelationInput | DisputeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disputes.
     */
    cursor?: DisputeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disputes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disputes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disputes.
     */
    distinct?: DisputeScalarFieldEnum | DisputeScalarFieldEnum[]
  }

  /**
   * Dispute findMany
   */
  export type DisputeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispute
     */
    omit?: DisputeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeInclude<ExtArgs> | null
    /**
     * Filter, which Disputes to fetch.
     */
    where?: DisputeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disputes to fetch.
     */
    orderBy?: DisputeOrderByWithRelationInput | DisputeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Disputes.
     */
    cursor?: DisputeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disputes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disputes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disputes.
     */
    distinct?: DisputeScalarFieldEnum | DisputeScalarFieldEnum[]
  }

  /**
   * Dispute create
   */
  export type DisputeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispute
     */
    omit?: DisputeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeInclude<ExtArgs> | null
    /**
     * The data needed to create a Dispute.
     */
    data: XOR<DisputeCreateInput, DisputeUncheckedCreateInput>
  }

  /**
   * Dispute createMany
   */
  export type DisputeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Disputes.
     */
    data: DisputeCreateManyInput | DisputeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dispute createManyAndReturn
   */
  export type DisputeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dispute
     */
    omit?: DisputeOmit<ExtArgs> | null
    /**
     * The data used to create many Disputes.
     */
    data: DisputeCreateManyInput | DisputeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dispute update
   */
  export type DisputeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispute
     */
    omit?: DisputeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeInclude<ExtArgs> | null
    /**
     * The data needed to update a Dispute.
     */
    data: XOR<DisputeUpdateInput, DisputeUncheckedUpdateInput>
    /**
     * Choose, which Dispute to update.
     */
    where: DisputeWhereUniqueInput
  }

  /**
   * Dispute updateMany
   */
  export type DisputeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Disputes.
     */
    data: XOR<DisputeUpdateManyMutationInput, DisputeUncheckedUpdateManyInput>
    /**
     * Filter which Disputes to update
     */
    where?: DisputeWhereInput
    /**
     * Limit how many Disputes to update.
     */
    limit?: number
  }

  /**
   * Dispute updateManyAndReturn
   */
  export type DisputeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dispute
     */
    omit?: DisputeOmit<ExtArgs> | null
    /**
     * The data used to update Disputes.
     */
    data: XOR<DisputeUpdateManyMutationInput, DisputeUncheckedUpdateManyInput>
    /**
     * Filter which Disputes to update
     */
    where?: DisputeWhereInput
    /**
     * Limit how many Disputes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dispute upsert
   */
  export type DisputeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispute
     */
    omit?: DisputeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeInclude<ExtArgs> | null
    /**
     * The filter to search for the Dispute to update in case it exists.
     */
    where: DisputeWhereUniqueInput
    /**
     * In case the Dispute found by the `where` argument doesn't exist, create a new Dispute with this data.
     */
    create: XOR<DisputeCreateInput, DisputeUncheckedCreateInput>
    /**
     * In case the Dispute was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DisputeUpdateInput, DisputeUncheckedUpdateInput>
  }

  /**
   * Dispute delete
   */
  export type DisputeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispute
     */
    omit?: DisputeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeInclude<ExtArgs> | null
    /**
     * Filter which Dispute to delete.
     */
    where: DisputeWhereUniqueInput
  }

  /**
   * Dispute deleteMany
   */
  export type DisputeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disputes to delete
     */
    where?: DisputeWhereInput
    /**
     * Limit how many Disputes to delete.
     */
    limit?: number
  }

  /**
   * Dispute.history
   */
  export type Dispute$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisputeHistory
     */
    select?: DisputeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisputeHistory
     */
    omit?: DisputeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeHistoryInclude<ExtArgs> | null
    where?: DisputeHistoryWhereInput
    orderBy?: DisputeHistoryOrderByWithRelationInput | DisputeHistoryOrderByWithRelationInput[]
    cursor?: DisputeHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DisputeHistoryScalarFieldEnum | DisputeHistoryScalarFieldEnum[]
  }

  /**
   * Dispute without action
   */
  export type DisputeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispute
     */
    omit?: DisputeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeInclude<ExtArgs> | null
  }


  /**
   * Model DisputeHistory
   */

  export type AggregateDisputeHistory = {
    _count: DisputeHistoryCountAggregateOutputType | null
    _min: DisputeHistoryMinAggregateOutputType | null
    _max: DisputeHistoryMaxAggregateOutputType | null
  }

  export type DisputeHistoryMinAggregateOutputType = {
    id: string | null
    disputeId: string | null
    status: $Enums.DisputeStatus | null
    comment: string | null
    createdAt: Date | null
  }

  export type DisputeHistoryMaxAggregateOutputType = {
    id: string | null
    disputeId: string | null
    status: $Enums.DisputeStatus | null
    comment: string | null
    createdAt: Date | null
  }

  export type DisputeHistoryCountAggregateOutputType = {
    id: number
    disputeId: number
    status: number
    comment: number
    createdAt: number
    _all: number
  }


  export type DisputeHistoryMinAggregateInputType = {
    id?: true
    disputeId?: true
    status?: true
    comment?: true
    createdAt?: true
  }

  export type DisputeHistoryMaxAggregateInputType = {
    id?: true
    disputeId?: true
    status?: true
    comment?: true
    createdAt?: true
  }

  export type DisputeHistoryCountAggregateInputType = {
    id?: true
    disputeId?: true
    status?: true
    comment?: true
    createdAt?: true
    _all?: true
  }

  export type DisputeHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DisputeHistory to aggregate.
     */
    where?: DisputeHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DisputeHistories to fetch.
     */
    orderBy?: DisputeHistoryOrderByWithRelationInput | DisputeHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DisputeHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DisputeHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DisputeHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DisputeHistories
    **/
    _count?: true | DisputeHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DisputeHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DisputeHistoryMaxAggregateInputType
  }

  export type GetDisputeHistoryAggregateType<T extends DisputeHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateDisputeHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDisputeHistory[P]>
      : GetScalarType<T[P], AggregateDisputeHistory[P]>
  }




  export type DisputeHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisputeHistoryWhereInput
    orderBy?: DisputeHistoryOrderByWithAggregationInput | DisputeHistoryOrderByWithAggregationInput[]
    by: DisputeHistoryScalarFieldEnum[] | DisputeHistoryScalarFieldEnum
    having?: DisputeHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DisputeHistoryCountAggregateInputType | true
    _min?: DisputeHistoryMinAggregateInputType
    _max?: DisputeHistoryMaxAggregateInputType
  }

  export type DisputeHistoryGroupByOutputType = {
    id: string
    disputeId: string
    status: $Enums.DisputeStatus
    comment: string | null
    createdAt: Date
    _count: DisputeHistoryCountAggregateOutputType | null
    _min: DisputeHistoryMinAggregateOutputType | null
    _max: DisputeHistoryMaxAggregateOutputType | null
  }

  type GetDisputeHistoryGroupByPayload<T extends DisputeHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DisputeHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DisputeHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DisputeHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], DisputeHistoryGroupByOutputType[P]>
        }
      >
    >


  export type DisputeHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    disputeId?: boolean
    status?: boolean
    comment?: boolean
    createdAt?: boolean
    dispute?: boolean | DisputeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disputeHistory"]>

  export type DisputeHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    disputeId?: boolean
    status?: boolean
    comment?: boolean
    createdAt?: boolean
    dispute?: boolean | DisputeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disputeHistory"]>

  export type DisputeHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    disputeId?: boolean
    status?: boolean
    comment?: boolean
    createdAt?: boolean
    dispute?: boolean | DisputeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disputeHistory"]>

  export type DisputeHistorySelectScalar = {
    id?: boolean
    disputeId?: boolean
    status?: boolean
    comment?: boolean
    createdAt?: boolean
  }

  export type DisputeHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "disputeId" | "status" | "comment" | "createdAt", ExtArgs["result"]["disputeHistory"]>
  export type DisputeHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dispute?: boolean | DisputeDefaultArgs<ExtArgs>
  }
  export type DisputeHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dispute?: boolean | DisputeDefaultArgs<ExtArgs>
  }
  export type DisputeHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dispute?: boolean | DisputeDefaultArgs<ExtArgs>
  }

  export type $DisputeHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DisputeHistory"
    objects: {
      dispute: Prisma.$DisputePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      disputeId: string
      status: $Enums.DisputeStatus
      comment: string | null
      createdAt: Date
    }, ExtArgs["result"]["disputeHistory"]>
    composites: {}
  }

  type DisputeHistoryGetPayload<S extends boolean | null | undefined | DisputeHistoryDefaultArgs> = $Result.GetResult<Prisma.$DisputeHistoryPayload, S>

  type DisputeHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DisputeHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DisputeHistoryCountAggregateInputType | true
    }

  export interface DisputeHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DisputeHistory'], meta: { name: 'DisputeHistory' } }
    /**
     * Find zero or one DisputeHistory that matches the filter.
     * @param {DisputeHistoryFindUniqueArgs} args - Arguments to find a DisputeHistory
     * @example
     * // Get one DisputeHistory
     * const disputeHistory = await prisma.disputeHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DisputeHistoryFindUniqueArgs>(args: SelectSubset<T, DisputeHistoryFindUniqueArgs<ExtArgs>>): Prisma__DisputeHistoryClient<$Result.GetResult<Prisma.$DisputeHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DisputeHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DisputeHistoryFindUniqueOrThrowArgs} args - Arguments to find a DisputeHistory
     * @example
     * // Get one DisputeHistory
     * const disputeHistory = await prisma.disputeHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DisputeHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, DisputeHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DisputeHistoryClient<$Result.GetResult<Prisma.$DisputeHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DisputeHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisputeHistoryFindFirstArgs} args - Arguments to find a DisputeHistory
     * @example
     * // Get one DisputeHistory
     * const disputeHistory = await prisma.disputeHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DisputeHistoryFindFirstArgs>(args?: SelectSubset<T, DisputeHistoryFindFirstArgs<ExtArgs>>): Prisma__DisputeHistoryClient<$Result.GetResult<Prisma.$DisputeHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DisputeHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisputeHistoryFindFirstOrThrowArgs} args - Arguments to find a DisputeHistory
     * @example
     * // Get one DisputeHistory
     * const disputeHistory = await prisma.disputeHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DisputeHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, DisputeHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__DisputeHistoryClient<$Result.GetResult<Prisma.$DisputeHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DisputeHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisputeHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DisputeHistories
     * const disputeHistories = await prisma.disputeHistory.findMany()
     * 
     * // Get first 10 DisputeHistories
     * const disputeHistories = await prisma.disputeHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const disputeHistoryWithIdOnly = await prisma.disputeHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DisputeHistoryFindManyArgs>(args?: SelectSubset<T, DisputeHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisputeHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DisputeHistory.
     * @param {DisputeHistoryCreateArgs} args - Arguments to create a DisputeHistory.
     * @example
     * // Create one DisputeHistory
     * const DisputeHistory = await prisma.disputeHistory.create({
     *   data: {
     *     // ... data to create a DisputeHistory
     *   }
     * })
     * 
     */
    create<T extends DisputeHistoryCreateArgs>(args: SelectSubset<T, DisputeHistoryCreateArgs<ExtArgs>>): Prisma__DisputeHistoryClient<$Result.GetResult<Prisma.$DisputeHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DisputeHistories.
     * @param {DisputeHistoryCreateManyArgs} args - Arguments to create many DisputeHistories.
     * @example
     * // Create many DisputeHistories
     * const disputeHistory = await prisma.disputeHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DisputeHistoryCreateManyArgs>(args?: SelectSubset<T, DisputeHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DisputeHistories and returns the data saved in the database.
     * @param {DisputeHistoryCreateManyAndReturnArgs} args - Arguments to create many DisputeHistories.
     * @example
     * // Create many DisputeHistories
     * const disputeHistory = await prisma.disputeHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DisputeHistories and only return the `id`
     * const disputeHistoryWithIdOnly = await prisma.disputeHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DisputeHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, DisputeHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisputeHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DisputeHistory.
     * @param {DisputeHistoryDeleteArgs} args - Arguments to delete one DisputeHistory.
     * @example
     * // Delete one DisputeHistory
     * const DisputeHistory = await prisma.disputeHistory.delete({
     *   where: {
     *     // ... filter to delete one DisputeHistory
     *   }
     * })
     * 
     */
    delete<T extends DisputeHistoryDeleteArgs>(args: SelectSubset<T, DisputeHistoryDeleteArgs<ExtArgs>>): Prisma__DisputeHistoryClient<$Result.GetResult<Prisma.$DisputeHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DisputeHistory.
     * @param {DisputeHistoryUpdateArgs} args - Arguments to update one DisputeHistory.
     * @example
     * // Update one DisputeHistory
     * const disputeHistory = await prisma.disputeHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DisputeHistoryUpdateArgs>(args: SelectSubset<T, DisputeHistoryUpdateArgs<ExtArgs>>): Prisma__DisputeHistoryClient<$Result.GetResult<Prisma.$DisputeHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DisputeHistories.
     * @param {DisputeHistoryDeleteManyArgs} args - Arguments to filter DisputeHistories to delete.
     * @example
     * // Delete a few DisputeHistories
     * const { count } = await prisma.disputeHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DisputeHistoryDeleteManyArgs>(args?: SelectSubset<T, DisputeHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DisputeHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisputeHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DisputeHistories
     * const disputeHistory = await prisma.disputeHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DisputeHistoryUpdateManyArgs>(args: SelectSubset<T, DisputeHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DisputeHistories and returns the data updated in the database.
     * @param {DisputeHistoryUpdateManyAndReturnArgs} args - Arguments to update many DisputeHistories.
     * @example
     * // Update many DisputeHistories
     * const disputeHistory = await prisma.disputeHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DisputeHistories and only return the `id`
     * const disputeHistoryWithIdOnly = await prisma.disputeHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DisputeHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, DisputeHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisputeHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DisputeHistory.
     * @param {DisputeHistoryUpsertArgs} args - Arguments to update or create a DisputeHistory.
     * @example
     * // Update or create a DisputeHistory
     * const disputeHistory = await prisma.disputeHistory.upsert({
     *   create: {
     *     // ... data to create a DisputeHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DisputeHistory we want to update
     *   }
     * })
     */
    upsert<T extends DisputeHistoryUpsertArgs>(args: SelectSubset<T, DisputeHistoryUpsertArgs<ExtArgs>>): Prisma__DisputeHistoryClient<$Result.GetResult<Prisma.$DisputeHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DisputeHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisputeHistoryCountArgs} args - Arguments to filter DisputeHistories to count.
     * @example
     * // Count the number of DisputeHistories
     * const count = await prisma.disputeHistory.count({
     *   where: {
     *     // ... the filter for the DisputeHistories we want to count
     *   }
     * })
    **/
    count<T extends DisputeHistoryCountArgs>(
      args?: Subset<T, DisputeHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DisputeHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DisputeHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisputeHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DisputeHistoryAggregateArgs>(args: Subset<T, DisputeHistoryAggregateArgs>): Prisma.PrismaPromise<GetDisputeHistoryAggregateType<T>>

    /**
     * Group by DisputeHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisputeHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DisputeHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DisputeHistoryGroupByArgs['orderBy'] }
        : { orderBy?: DisputeHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DisputeHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDisputeHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DisputeHistory model
   */
  readonly fields: DisputeHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DisputeHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DisputeHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dispute<T extends DisputeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DisputeDefaultArgs<ExtArgs>>): Prisma__DisputeClient<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DisputeHistory model
   */
  interface DisputeHistoryFieldRefs {
    readonly id: FieldRef<"DisputeHistory", 'String'>
    readonly disputeId: FieldRef<"DisputeHistory", 'String'>
    readonly status: FieldRef<"DisputeHistory", 'DisputeStatus'>
    readonly comment: FieldRef<"DisputeHistory", 'String'>
    readonly createdAt: FieldRef<"DisputeHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DisputeHistory findUnique
   */
  export type DisputeHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisputeHistory
     */
    select?: DisputeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisputeHistory
     */
    omit?: DisputeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeHistoryInclude<ExtArgs> | null
    /**
     * Filter, which DisputeHistory to fetch.
     */
    where: DisputeHistoryWhereUniqueInput
  }

  /**
   * DisputeHistory findUniqueOrThrow
   */
  export type DisputeHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisputeHistory
     */
    select?: DisputeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisputeHistory
     */
    omit?: DisputeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeHistoryInclude<ExtArgs> | null
    /**
     * Filter, which DisputeHistory to fetch.
     */
    where: DisputeHistoryWhereUniqueInput
  }

  /**
   * DisputeHistory findFirst
   */
  export type DisputeHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisputeHistory
     */
    select?: DisputeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisputeHistory
     */
    omit?: DisputeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeHistoryInclude<ExtArgs> | null
    /**
     * Filter, which DisputeHistory to fetch.
     */
    where?: DisputeHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DisputeHistories to fetch.
     */
    orderBy?: DisputeHistoryOrderByWithRelationInput | DisputeHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DisputeHistories.
     */
    cursor?: DisputeHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DisputeHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DisputeHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DisputeHistories.
     */
    distinct?: DisputeHistoryScalarFieldEnum | DisputeHistoryScalarFieldEnum[]
  }

  /**
   * DisputeHistory findFirstOrThrow
   */
  export type DisputeHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisputeHistory
     */
    select?: DisputeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisputeHistory
     */
    omit?: DisputeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeHistoryInclude<ExtArgs> | null
    /**
     * Filter, which DisputeHistory to fetch.
     */
    where?: DisputeHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DisputeHistories to fetch.
     */
    orderBy?: DisputeHistoryOrderByWithRelationInput | DisputeHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DisputeHistories.
     */
    cursor?: DisputeHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DisputeHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DisputeHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DisputeHistories.
     */
    distinct?: DisputeHistoryScalarFieldEnum | DisputeHistoryScalarFieldEnum[]
  }

  /**
   * DisputeHistory findMany
   */
  export type DisputeHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisputeHistory
     */
    select?: DisputeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisputeHistory
     */
    omit?: DisputeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeHistoryInclude<ExtArgs> | null
    /**
     * Filter, which DisputeHistories to fetch.
     */
    where?: DisputeHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DisputeHistories to fetch.
     */
    orderBy?: DisputeHistoryOrderByWithRelationInput | DisputeHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DisputeHistories.
     */
    cursor?: DisputeHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DisputeHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DisputeHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DisputeHistories.
     */
    distinct?: DisputeHistoryScalarFieldEnum | DisputeHistoryScalarFieldEnum[]
  }

  /**
   * DisputeHistory create
   */
  export type DisputeHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisputeHistory
     */
    select?: DisputeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisputeHistory
     */
    omit?: DisputeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a DisputeHistory.
     */
    data: XOR<DisputeHistoryCreateInput, DisputeHistoryUncheckedCreateInput>
  }

  /**
   * DisputeHistory createMany
   */
  export type DisputeHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DisputeHistories.
     */
    data: DisputeHistoryCreateManyInput | DisputeHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DisputeHistory createManyAndReturn
   */
  export type DisputeHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisputeHistory
     */
    select?: DisputeHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DisputeHistory
     */
    omit?: DisputeHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many DisputeHistories.
     */
    data: DisputeHistoryCreateManyInput | DisputeHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DisputeHistory update
   */
  export type DisputeHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisputeHistory
     */
    select?: DisputeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisputeHistory
     */
    omit?: DisputeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a DisputeHistory.
     */
    data: XOR<DisputeHistoryUpdateInput, DisputeHistoryUncheckedUpdateInput>
    /**
     * Choose, which DisputeHistory to update.
     */
    where: DisputeHistoryWhereUniqueInput
  }

  /**
   * DisputeHistory updateMany
   */
  export type DisputeHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DisputeHistories.
     */
    data: XOR<DisputeHistoryUpdateManyMutationInput, DisputeHistoryUncheckedUpdateManyInput>
    /**
     * Filter which DisputeHistories to update
     */
    where?: DisputeHistoryWhereInput
    /**
     * Limit how many DisputeHistories to update.
     */
    limit?: number
  }

  /**
   * DisputeHistory updateManyAndReturn
   */
  export type DisputeHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisputeHistory
     */
    select?: DisputeHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DisputeHistory
     */
    omit?: DisputeHistoryOmit<ExtArgs> | null
    /**
     * The data used to update DisputeHistories.
     */
    data: XOR<DisputeHistoryUpdateManyMutationInput, DisputeHistoryUncheckedUpdateManyInput>
    /**
     * Filter which DisputeHistories to update
     */
    where?: DisputeHistoryWhereInput
    /**
     * Limit how many DisputeHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DisputeHistory upsert
   */
  export type DisputeHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisputeHistory
     */
    select?: DisputeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisputeHistory
     */
    omit?: DisputeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the DisputeHistory to update in case it exists.
     */
    where: DisputeHistoryWhereUniqueInput
    /**
     * In case the DisputeHistory found by the `where` argument doesn't exist, create a new DisputeHistory with this data.
     */
    create: XOR<DisputeHistoryCreateInput, DisputeHistoryUncheckedCreateInput>
    /**
     * In case the DisputeHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DisputeHistoryUpdateInput, DisputeHistoryUncheckedUpdateInput>
  }

  /**
   * DisputeHistory delete
   */
  export type DisputeHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisputeHistory
     */
    select?: DisputeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisputeHistory
     */
    omit?: DisputeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeHistoryInclude<ExtArgs> | null
    /**
     * Filter which DisputeHistory to delete.
     */
    where: DisputeHistoryWhereUniqueInput
  }

  /**
   * DisputeHistory deleteMany
   */
  export type DisputeHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DisputeHistories to delete
     */
    where?: DisputeHistoryWhereInput
    /**
     * Limit how many DisputeHistories to delete.
     */
    limit?: number
  }

  /**
   * DisputeHistory without action
   */
  export type DisputeHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisputeHistory
     */
    select?: DisputeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisputeHistory
     */
    omit?: DisputeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeHistoryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    customerNumber: 'customerNumber',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    reference: 'reference',
    amount: 'amount',
    currency: 'currency',
    description: 'description',
    transactionDate: 'transactionDate',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const DisputeScalarFieldEnum: {
    id: 'id',
    transactionId: 'transactionId',
    customerId: 'customerId',
    reason: 'reason',
    description: 'description',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    resolvedAt: 'resolvedAt'
  };

  export type DisputeScalarFieldEnum = (typeof DisputeScalarFieldEnum)[keyof typeof DisputeScalarFieldEnum]


  export const DisputeHistoryScalarFieldEnum: {
    id: 'id',
    disputeId: 'disputeId',
    status: 'status',
    comment: 'comment',
    createdAt: 'createdAt'
  };

  export type DisputeHistoryScalarFieldEnum = (typeof DisputeHistoryScalarFieldEnum)[keyof typeof DisputeHistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'TransactionStatus'
   */
  export type EnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus'>
    


  /**
   * Reference to a field of type 'TransactionStatus[]'
   */
  export type ListEnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus[]'>
    


  /**
   * Reference to a field of type 'DisputeStatus'
   */
  export type EnumDisputeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DisputeStatus'>
    


  /**
   * Reference to a field of type 'DisputeStatus[]'
   */
  export type ListEnumDisputeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DisputeStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    customerNumber?: StringFilter<"Customer"> | string
    firstName?: StringFilter<"Customer"> | string
    lastName?: StringFilter<"Customer"> | string
    email?: StringFilter<"Customer"> | string
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    transactions?: TransactionListRelationFilter
    disputes?: DisputeListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    customerNumber?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    transactions?: TransactionOrderByRelationAggregateInput
    disputes?: DisputeOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    customerNumber?: string
    email?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    firstName?: StringFilter<"Customer"> | string
    lastName?: StringFilter<"Customer"> | string
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    transactions?: TransactionListRelationFilter
    disputes?: DisputeListRelationFilter
  }, "id" | "customerNumber" | "email">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    customerNumber?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    customerNumber?: StringWithAggregatesFilter<"Customer"> | string
    firstName?: StringWithAggregatesFilter<"Customer"> | string
    lastName?: StringWithAggregatesFilter<"Customer"> | string
    email?: StringWithAggregatesFilter<"Customer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: StringFilter<"Transaction"> | string
    customerId?: StringFilter<"Transaction"> | string
    reference?: StringFilter<"Transaction"> | string
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Transaction"> | string
    description?: StringFilter<"Transaction"> | string
    transactionDate?: DateTimeFilter<"Transaction"> | Date | string
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    disputes?: DisputeListRelationFilter
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    reference?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    description?: SortOrder
    transactionDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    disputes?: DisputeOrderByRelationAggregateInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    reference?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    customerId?: StringFilter<"Transaction"> | string
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Transaction"> | string
    description?: StringFilter<"Transaction"> | string
    transactionDate?: DateTimeFilter<"Transaction"> | Date | string
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    disputes?: DisputeListRelationFilter
  }, "id" | "reference">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    reference?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    description?: SortOrder
    transactionDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transaction"> | string
    customerId?: StringWithAggregatesFilter<"Transaction"> | string
    reference?: StringWithAggregatesFilter<"Transaction"> | string
    amount?: DecimalWithAggregatesFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    currency?: StringWithAggregatesFilter<"Transaction"> | string
    description?: StringWithAggregatesFilter<"Transaction"> | string
    transactionDate?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    status?: EnumTransactionStatusWithAggregatesFilter<"Transaction"> | $Enums.TransactionStatus
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type DisputeWhereInput = {
    AND?: DisputeWhereInput | DisputeWhereInput[]
    OR?: DisputeWhereInput[]
    NOT?: DisputeWhereInput | DisputeWhereInput[]
    id?: StringFilter<"Dispute"> | string
    transactionId?: StringFilter<"Dispute"> | string
    customerId?: StringFilter<"Dispute"> | string
    reason?: StringFilter<"Dispute"> | string
    description?: StringFilter<"Dispute"> | string
    status?: EnumDisputeStatusFilter<"Dispute"> | $Enums.DisputeStatus
    createdAt?: DateTimeFilter<"Dispute"> | Date | string
    updatedAt?: DateTimeFilter<"Dispute"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"Dispute"> | Date | string | null
    transaction?: XOR<TransactionScalarRelationFilter, TransactionWhereInput>
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    history?: DisputeHistoryListRelationFilter
  }

  export type DisputeOrderByWithRelationInput = {
    id?: SortOrder
    transactionId?: SortOrder
    customerId?: SortOrder
    reason?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    transaction?: TransactionOrderByWithRelationInput
    customer?: CustomerOrderByWithRelationInput
    history?: DisputeHistoryOrderByRelationAggregateInput
  }

  export type DisputeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DisputeWhereInput | DisputeWhereInput[]
    OR?: DisputeWhereInput[]
    NOT?: DisputeWhereInput | DisputeWhereInput[]
    transactionId?: StringFilter<"Dispute"> | string
    customerId?: StringFilter<"Dispute"> | string
    reason?: StringFilter<"Dispute"> | string
    description?: StringFilter<"Dispute"> | string
    status?: EnumDisputeStatusFilter<"Dispute"> | $Enums.DisputeStatus
    createdAt?: DateTimeFilter<"Dispute"> | Date | string
    updatedAt?: DateTimeFilter<"Dispute"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"Dispute"> | Date | string | null
    transaction?: XOR<TransactionScalarRelationFilter, TransactionWhereInput>
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    history?: DisputeHistoryListRelationFilter
  }, "id">

  export type DisputeOrderByWithAggregationInput = {
    id?: SortOrder
    transactionId?: SortOrder
    customerId?: SortOrder
    reason?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    _count?: DisputeCountOrderByAggregateInput
    _max?: DisputeMaxOrderByAggregateInput
    _min?: DisputeMinOrderByAggregateInput
  }

  export type DisputeScalarWhereWithAggregatesInput = {
    AND?: DisputeScalarWhereWithAggregatesInput | DisputeScalarWhereWithAggregatesInput[]
    OR?: DisputeScalarWhereWithAggregatesInput[]
    NOT?: DisputeScalarWhereWithAggregatesInput | DisputeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Dispute"> | string
    transactionId?: StringWithAggregatesFilter<"Dispute"> | string
    customerId?: StringWithAggregatesFilter<"Dispute"> | string
    reason?: StringWithAggregatesFilter<"Dispute"> | string
    description?: StringWithAggregatesFilter<"Dispute"> | string
    status?: EnumDisputeStatusWithAggregatesFilter<"Dispute"> | $Enums.DisputeStatus
    createdAt?: DateTimeWithAggregatesFilter<"Dispute"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Dispute"> | Date | string
    resolvedAt?: DateTimeNullableWithAggregatesFilter<"Dispute"> | Date | string | null
  }

  export type DisputeHistoryWhereInput = {
    AND?: DisputeHistoryWhereInput | DisputeHistoryWhereInput[]
    OR?: DisputeHistoryWhereInput[]
    NOT?: DisputeHistoryWhereInput | DisputeHistoryWhereInput[]
    id?: StringFilter<"DisputeHistory"> | string
    disputeId?: StringFilter<"DisputeHistory"> | string
    status?: EnumDisputeStatusFilter<"DisputeHistory"> | $Enums.DisputeStatus
    comment?: StringNullableFilter<"DisputeHistory"> | string | null
    createdAt?: DateTimeFilter<"DisputeHistory"> | Date | string
    dispute?: XOR<DisputeScalarRelationFilter, DisputeWhereInput>
  }

  export type DisputeHistoryOrderByWithRelationInput = {
    id?: SortOrder
    disputeId?: SortOrder
    status?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    dispute?: DisputeOrderByWithRelationInput
  }

  export type DisputeHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DisputeHistoryWhereInput | DisputeHistoryWhereInput[]
    OR?: DisputeHistoryWhereInput[]
    NOT?: DisputeHistoryWhereInput | DisputeHistoryWhereInput[]
    disputeId?: StringFilter<"DisputeHistory"> | string
    status?: EnumDisputeStatusFilter<"DisputeHistory"> | $Enums.DisputeStatus
    comment?: StringNullableFilter<"DisputeHistory"> | string | null
    createdAt?: DateTimeFilter<"DisputeHistory"> | Date | string
    dispute?: XOR<DisputeScalarRelationFilter, DisputeWhereInput>
  }, "id">

  export type DisputeHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    disputeId?: SortOrder
    status?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: DisputeHistoryCountOrderByAggregateInput
    _max?: DisputeHistoryMaxOrderByAggregateInput
    _min?: DisputeHistoryMinOrderByAggregateInput
  }

  export type DisputeHistoryScalarWhereWithAggregatesInput = {
    AND?: DisputeHistoryScalarWhereWithAggregatesInput | DisputeHistoryScalarWhereWithAggregatesInput[]
    OR?: DisputeHistoryScalarWhereWithAggregatesInput[]
    NOT?: DisputeHistoryScalarWhereWithAggregatesInput | DisputeHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DisputeHistory"> | string
    disputeId?: StringWithAggregatesFilter<"DisputeHistory"> | string
    status?: EnumDisputeStatusWithAggregatesFilter<"DisputeHistory"> | $Enums.DisputeStatus
    comment?: StringNullableWithAggregatesFilter<"DisputeHistory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"DisputeHistory"> | Date | string
  }

  export type CustomerCreateInput = {
    id?: string
    customerNumber: string
    firstName: string
    lastName: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutCustomerInput
    disputes?: DisputeCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    customerNumber: string
    firstName: string
    lastName: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutCustomerInput
    disputes?: DisputeUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutCustomerNestedInput
    disputes?: DisputeUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutCustomerNestedInput
    disputes?: DisputeUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    customerNumber: string
    firstName: string
    lastName: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateInput = {
    id?: string
    reference: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    description: string
    transactionDate: Date | string
    status: $Enums.TransactionStatus
    createdAt?: Date | string
    customer: CustomerCreateNestedOneWithoutTransactionsInput
    disputes?: DisputeCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    customerId: string
    reference: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    description: string
    transactionDate: Date | string
    status: $Enums.TransactionStatus
    createdAt?: Date | string
    disputes?: DisputeUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutTransactionsNestedInput
    disputes?: DisputeUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disputes?: DisputeUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionCreateManyInput = {
    id?: string
    customerId: string
    reference: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    description: string
    transactionDate: Date | string
    status: $Enums.TransactionStatus
    createdAt?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisputeCreateInput = {
    id?: string
    reason: string
    description: string
    status?: $Enums.DisputeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
    transaction: TransactionCreateNestedOneWithoutDisputesInput
    customer: CustomerCreateNestedOneWithoutDisputesInput
    history?: DisputeHistoryCreateNestedManyWithoutDisputeInput
  }

  export type DisputeUncheckedCreateInput = {
    id?: string
    transactionId: string
    customerId: string
    reason: string
    description: string
    status?: $Enums.DisputeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
    history?: DisputeHistoryUncheckedCreateNestedManyWithoutDisputeInput
  }

  export type DisputeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transaction?: TransactionUpdateOneRequiredWithoutDisputesNestedInput
    customer?: CustomerUpdateOneRequiredWithoutDisputesNestedInput
    history?: DisputeHistoryUpdateManyWithoutDisputeNestedInput
  }

  export type DisputeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    history?: DisputeHistoryUncheckedUpdateManyWithoutDisputeNestedInput
  }

  export type DisputeCreateManyInput = {
    id?: string
    transactionId: string
    customerId: string
    reason: string
    description: string
    status?: $Enums.DisputeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type DisputeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DisputeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DisputeHistoryCreateInput = {
    id?: string
    status: $Enums.DisputeStatus
    comment?: string | null
    createdAt?: Date | string
    dispute: DisputeCreateNestedOneWithoutHistoryInput
  }

  export type DisputeHistoryUncheckedCreateInput = {
    id?: string
    disputeId: string
    status: $Enums.DisputeStatus
    comment?: string | null
    createdAt?: Date | string
  }

  export type DisputeHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dispute?: DisputeUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type DisputeHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    disputeId?: StringFieldUpdateOperationsInput | string
    status?: EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisputeHistoryCreateManyInput = {
    id?: string
    disputeId: string
    status: $Enums.DisputeStatus
    comment?: string | null
    createdAt?: Date | string
  }

  export type DisputeHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisputeHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    disputeId?: StringFieldUpdateOperationsInput | string
    status?: EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type DisputeListRelationFilter = {
    every?: DisputeWhereInput
    some?: DisputeWhereInput
    none?: DisputeWhereInput
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DisputeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    customerNumber?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    customerNumber?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    customerNumber?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    reference?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    description?: SortOrder
    transactionDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    reference?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    description?: SortOrder
    transactionDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    reference?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    description?: SortOrder
    transactionDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type EnumDisputeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DisputeStatus | EnumDisputeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DisputeStatus[] | ListEnumDisputeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DisputeStatus[] | ListEnumDisputeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDisputeStatusFilter<$PrismaModel> | $Enums.DisputeStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type TransactionScalarRelationFilter = {
    is?: TransactionWhereInput
    isNot?: TransactionWhereInput
  }

  export type DisputeHistoryListRelationFilter = {
    every?: DisputeHistoryWhereInput
    some?: DisputeHistoryWhereInput
    none?: DisputeHistoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DisputeHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DisputeCountOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    customerId?: SortOrder
    reason?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resolvedAt?: SortOrder
  }

  export type DisputeMaxOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    customerId?: SortOrder
    reason?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resolvedAt?: SortOrder
  }

  export type DisputeMinOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    customerId?: SortOrder
    reason?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resolvedAt?: SortOrder
  }

  export type EnumDisputeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DisputeStatus | EnumDisputeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DisputeStatus[] | ListEnumDisputeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DisputeStatus[] | ListEnumDisputeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDisputeStatusWithAggregatesFilter<$PrismaModel> | $Enums.DisputeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDisputeStatusFilter<$PrismaModel>
    _max?: NestedEnumDisputeStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DisputeScalarRelationFilter = {
    is?: DisputeWhereInput
    isNot?: DisputeWhereInput
  }

  export type DisputeHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    disputeId?: SortOrder
    status?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type DisputeHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    disputeId?: SortOrder
    status?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type DisputeHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    disputeId?: SortOrder
    status?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type TransactionCreateNestedManyWithoutCustomerInput = {
    create?: XOR<TransactionCreateWithoutCustomerInput, TransactionUncheckedCreateWithoutCustomerInput> | TransactionCreateWithoutCustomerInput[] | TransactionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCustomerInput | TransactionCreateOrConnectWithoutCustomerInput[]
    createMany?: TransactionCreateManyCustomerInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type DisputeCreateNestedManyWithoutCustomerInput = {
    create?: XOR<DisputeCreateWithoutCustomerInput, DisputeUncheckedCreateWithoutCustomerInput> | DisputeCreateWithoutCustomerInput[] | DisputeUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: DisputeCreateOrConnectWithoutCustomerInput | DisputeCreateOrConnectWithoutCustomerInput[]
    createMany?: DisputeCreateManyCustomerInputEnvelope
    connect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<TransactionCreateWithoutCustomerInput, TransactionUncheckedCreateWithoutCustomerInput> | TransactionCreateWithoutCustomerInput[] | TransactionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCustomerInput | TransactionCreateOrConnectWithoutCustomerInput[]
    createMany?: TransactionCreateManyCustomerInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type DisputeUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<DisputeCreateWithoutCustomerInput, DisputeUncheckedCreateWithoutCustomerInput> | DisputeCreateWithoutCustomerInput[] | DisputeUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: DisputeCreateOrConnectWithoutCustomerInput | DisputeCreateOrConnectWithoutCustomerInput[]
    createMany?: DisputeCreateManyCustomerInputEnvelope
    connect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TransactionUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<TransactionCreateWithoutCustomerInput, TransactionUncheckedCreateWithoutCustomerInput> | TransactionCreateWithoutCustomerInput[] | TransactionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCustomerInput | TransactionCreateOrConnectWithoutCustomerInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCustomerInput | TransactionUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: TransactionCreateManyCustomerInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCustomerInput | TransactionUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCustomerInput | TransactionUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type DisputeUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<DisputeCreateWithoutCustomerInput, DisputeUncheckedCreateWithoutCustomerInput> | DisputeCreateWithoutCustomerInput[] | DisputeUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: DisputeCreateOrConnectWithoutCustomerInput | DisputeCreateOrConnectWithoutCustomerInput[]
    upsert?: DisputeUpsertWithWhereUniqueWithoutCustomerInput | DisputeUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: DisputeCreateManyCustomerInputEnvelope
    set?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    disconnect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    delete?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    connect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    update?: DisputeUpdateWithWhereUniqueWithoutCustomerInput | DisputeUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: DisputeUpdateManyWithWhereWithoutCustomerInput | DisputeUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: DisputeScalarWhereInput | DisputeScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<TransactionCreateWithoutCustomerInput, TransactionUncheckedCreateWithoutCustomerInput> | TransactionCreateWithoutCustomerInput[] | TransactionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCustomerInput | TransactionCreateOrConnectWithoutCustomerInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCustomerInput | TransactionUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: TransactionCreateManyCustomerInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCustomerInput | TransactionUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCustomerInput | TransactionUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type DisputeUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<DisputeCreateWithoutCustomerInput, DisputeUncheckedCreateWithoutCustomerInput> | DisputeCreateWithoutCustomerInput[] | DisputeUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: DisputeCreateOrConnectWithoutCustomerInput | DisputeCreateOrConnectWithoutCustomerInput[]
    upsert?: DisputeUpsertWithWhereUniqueWithoutCustomerInput | DisputeUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: DisputeCreateManyCustomerInputEnvelope
    set?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    disconnect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    delete?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    connect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    update?: DisputeUpdateWithWhereUniqueWithoutCustomerInput | DisputeUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: DisputeUpdateManyWithWhereWithoutCustomerInput | DisputeUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: DisputeScalarWhereInput | DisputeScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<CustomerCreateWithoutTransactionsInput, CustomerUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutTransactionsInput
    connect?: CustomerWhereUniqueInput
  }

  export type DisputeCreateNestedManyWithoutTransactionInput = {
    create?: XOR<DisputeCreateWithoutTransactionInput, DisputeUncheckedCreateWithoutTransactionInput> | DisputeCreateWithoutTransactionInput[] | DisputeUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: DisputeCreateOrConnectWithoutTransactionInput | DisputeCreateOrConnectWithoutTransactionInput[]
    createMany?: DisputeCreateManyTransactionInputEnvelope
    connect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
  }

  export type DisputeUncheckedCreateNestedManyWithoutTransactionInput = {
    create?: XOR<DisputeCreateWithoutTransactionInput, DisputeUncheckedCreateWithoutTransactionInput> | DisputeCreateWithoutTransactionInput[] | DisputeUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: DisputeCreateOrConnectWithoutTransactionInput | DisputeCreateOrConnectWithoutTransactionInput[]
    createMany?: DisputeCreateManyTransactionInputEnvelope
    connect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumTransactionStatusFieldUpdateOperationsInput = {
    set?: $Enums.TransactionStatus
  }

  export type CustomerUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<CustomerCreateWithoutTransactionsInput, CustomerUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutTransactionsInput
    upsert?: CustomerUpsertWithoutTransactionsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutTransactionsInput, CustomerUpdateWithoutTransactionsInput>, CustomerUncheckedUpdateWithoutTransactionsInput>
  }

  export type DisputeUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<DisputeCreateWithoutTransactionInput, DisputeUncheckedCreateWithoutTransactionInput> | DisputeCreateWithoutTransactionInput[] | DisputeUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: DisputeCreateOrConnectWithoutTransactionInput | DisputeCreateOrConnectWithoutTransactionInput[]
    upsert?: DisputeUpsertWithWhereUniqueWithoutTransactionInput | DisputeUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: DisputeCreateManyTransactionInputEnvelope
    set?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    disconnect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    delete?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    connect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    update?: DisputeUpdateWithWhereUniqueWithoutTransactionInput | DisputeUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: DisputeUpdateManyWithWhereWithoutTransactionInput | DisputeUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: DisputeScalarWhereInput | DisputeScalarWhereInput[]
  }

  export type DisputeUncheckedUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<DisputeCreateWithoutTransactionInput, DisputeUncheckedCreateWithoutTransactionInput> | DisputeCreateWithoutTransactionInput[] | DisputeUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: DisputeCreateOrConnectWithoutTransactionInput | DisputeCreateOrConnectWithoutTransactionInput[]
    upsert?: DisputeUpsertWithWhereUniqueWithoutTransactionInput | DisputeUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: DisputeCreateManyTransactionInputEnvelope
    set?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    disconnect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    delete?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    connect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    update?: DisputeUpdateWithWhereUniqueWithoutTransactionInput | DisputeUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: DisputeUpdateManyWithWhereWithoutTransactionInput | DisputeUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: DisputeScalarWhereInput | DisputeScalarWhereInput[]
  }

  export type TransactionCreateNestedOneWithoutDisputesInput = {
    create?: XOR<TransactionCreateWithoutDisputesInput, TransactionUncheckedCreateWithoutDisputesInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutDisputesInput
    connect?: TransactionWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutDisputesInput = {
    create?: XOR<CustomerCreateWithoutDisputesInput, CustomerUncheckedCreateWithoutDisputesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutDisputesInput
    connect?: CustomerWhereUniqueInput
  }

  export type DisputeHistoryCreateNestedManyWithoutDisputeInput = {
    create?: XOR<DisputeHistoryCreateWithoutDisputeInput, DisputeHistoryUncheckedCreateWithoutDisputeInput> | DisputeHistoryCreateWithoutDisputeInput[] | DisputeHistoryUncheckedCreateWithoutDisputeInput[]
    connectOrCreate?: DisputeHistoryCreateOrConnectWithoutDisputeInput | DisputeHistoryCreateOrConnectWithoutDisputeInput[]
    createMany?: DisputeHistoryCreateManyDisputeInputEnvelope
    connect?: DisputeHistoryWhereUniqueInput | DisputeHistoryWhereUniqueInput[]
  }

  export type DisputeHistoryUncheckedCreateNestedManyWithoutDisputeInput = {
    create?: XOR<DisputeHistoryCreateWithoutDisputeInput, DisputeHistoryUncheckedCreateWithoutDisputeInput> | DisputeHistoryCreateWithoutDisputeInput[] | DisputeHistoryUncheckedCreateWithoutDisputeInput[]
    connectOrCreate?: DisputeHistoryCreateOrConnectWithoutDisputeInput | DisputeHistoryCreateOrConnectWithoutDisputeInput[]
    createMany?: DisputeHistoryCreateManyDisputeInputEnvelope
    connect?: DisputeHistoryWhereUniqueInput | DisputeHistoryWhereUniqueInput[]
  }

  export type EnumDisputeStatusFieldUpdateOperationsInput = {
    set?: $Enums.DisputeStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TransactionUpdateOneRequiredWithoutDisputesNestedInput = {
    create?: XOR<TransactionCreateWithoutDisputesInput, TransactionUncheckedCreateWithoutDisputesInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutDisputesInput
    upsert?: TransactionUpsertWithoutDisputesInput
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutDisputesInput, TransactionUpdateWithoutDisputesInput>, TransactionUncheckedUpdateWithoutDisputesInput>
  }

  export type CustomerUpdateOneRequiredWithoutDisputesNestedInput = {
    create?: XOR<CustomerCreateWithoutDisputesInput, CustomerUncheckedCreateWithoutDisputesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutDisputesInput
    upsert?: CustomerUpsertWithoutDisputesInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutDisputesInput, CustomerUpdateWithoutDisputesInput>, CustomerUncheckedUpdateWithoutDisputesInput>
  }

  export type DisputeHistoryUpdateManyWithoutDisputeNestedInput = {
    create?: XOR<DisputeHistoryCreateWithoutDisputeInput, DisputeHistoryUncheckedCreateWithoutDisputeInput> | DisputeHistoryCreateWithoutDisputeInput[] | DisputeHistoryUncheckedCreateWithoutDisputeInput[]
    connectOrCreate?: DisputeHistoryCreateOrConnectWithoutDisputeInput | DisputeHistoryCreateOrConnectWithoutDisputeInput[]
    upsert?: DisputeHistoryUpsertWithWhereUniqueWithoutDisputeInput | DisputeHistoryUpsertWithWhereUniqueWithoutDisputeInput[]
    createMany?: DisputeHistoryCreateManyDisputeInputEnvelope
    set?: DisputeHistoryWhereUniqueInput | DisputeHistoryWhereUniqueInput[]
    disconnect?: DisputeHistoryWhereUniqueInput | DisputeHistoryWhereUniqueInput[]
    delete?: DisputeHistoryWhereUniqueInput | DisputeHistoryWhereUniqueInput[]
    connect?: DisputeHistoryWhereUniqueInput | DisputeHistoryWhereUniqueInput[]
    update?: DisputeHistoryUpdateWithWhereUniqueWithoutDisputeInput | DisputeHistoryUpdateWithWhereUniqueWithoutDisputeInput[]
    updateMany?: DisputeHistoryUpdateManyWithWhereWithoutDisputeInput | DisputeHistoryUpdateManyWithWhereWithoutDisputeInput[]
    deleteMany?: DisputeHistoryScalarWhereInput | DisputeHistoryScalarWhereInput[]
  }

  export type DisputeHistoryUncheckedUpdateManyWithoutDisputeNestedInput = {
    create?: XOR<DisputeHistoryCreateWithoutDisputeInput, DisputeHistoryUncheckedCreateWithoutDisputeInput> | DisputeHistoryCreateWithoutDisputeInput[] | DisputeHistoryUncheckedCreateWithoutDisputeInput[]
    connectOrCreate?: DisputeHistoryCreateOrConnectWithoutDisputeInput | DisputeHistoryCreateOrConnectWithoutDisputeInput[]
    upsert?: DisputeHistoryUpsertWithWhereUniqueWithoutDisputeInput | DisputeHistoryUpsertWithWhereUniqueWithoutDisputeInput[]
    createMany?: DisputeHistoryCreateManyDisputeInputEnvelope
    set?: DisputeHistoryWhereUniqueInput | DisputeHistoryWhereUniqueInput[]
    disconnect?: DisputeHistoryWhereUniqueInput | DisputeHistoryWhereUniqueInput[]
    delete?: DisputeHistoryWhereUniqueInput | DisputeHistoryWhereUniqueInput[]
    connect?: DisputeHistoryWhereUniqueInput | DisputeHistoryWhereUniqueInput[]
    update?: DisputeHistoryUpdateWithWhereUniqueWithoutDisputeInput | DisputeHistoryUpdateWithWhereUniqueWithoutDisputeInput[]
    updateMany?: DisputeHistoryUpdateManyWithWhereWithoutDisputeInput | DisputeHistoryUpdateManyWithWhereWithoutDisputeInput[]
    deleteMany?: DisputeHistoryScalarWhereInput | DisputeHistoryScalarWhereInput[]
  }

  export type DisputeCreateNestedOneWithoutHistoryInput = {
    create?: XOR<DisputeCreateWithoutHistoryInput, DisputeUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: DisputeCreateOrConnectWithoutHistoryInput
    connect?: DisputeWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DisputeUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<DisputeCreateWithoutHistoryInput, DisputeUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: DisputeCreateOrConnectWithoutHistoryInput
    upsert?: DisputeUpsertWithoutHistoryInput
    connect?: DisputeWhereUniqueInput
    update?: XOR<XOR<DisputeUpdateToOneWithWhereWithoutHistoryInput, DisputeUpdateWithoutHistoryInput>, DisputeUncheckedUpdateWithoutHistoryInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type NestedEnumDisputeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DisputeStatus | EnumDisputeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DisputeStatus[] | ListEnumDisputeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DisputeStatus[] | ListEnumDisputeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDisputeStatusFilter<$PrismaModel> | $Enums.DisputeStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumDisputeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DisputeStatus | EnumDisputeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DisputeStatus[] | ListEnumDisputeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DisputeStatus[] | ListEnumDisputeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDisputeStatusWithAggregatesFilter<$PrismaModel> | $Enums.DisputeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDisputeStatusFilter<$PrismaModel>
    _max?: NestedEnumDisputeStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type TransactionCreateWithoutCustomerInput = {
    id?: string
    reference: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    description: string
    transactionDate: Date | string
    status: $Enums.TransactionStatus
    createdAt?: Date | string
    disputes?: DisputeCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutCustomerInput = {
    id?: string
    reference: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    description: string
    transactionDate: Date | string
    status: $Enums.TransactionStatus
    createdAt?: Date | string
    disputes?: DisputeUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutCustomerInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutCustomerInput, TransactionUncheckedCreateWithoutCustomerInput>
  }

  export type TransactionCreateManyCustomerInputEnvelope = {
    data: TransactionCreateManyCustomerInput | TransactionCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type DisputeCreateWithoutCustomerInput = {
    id?: string
    reason: string
    description: string
    status?: $Enums.DisputeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
    transaction: TransactionCreateNestedOneWithoutDisputesInput
    history?: DisputeHistoryCreateNestedManyWithoutDisputeInput
  }

  export type DisputeUncheckedCreateWithoutCustomerInput = {
    id?: string
    transactionId: string
    reason: string
    description: string
    status?: $Enums.DisputeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
    history?: DisputeHistoryUncheckedCreateNestedManyWithoutDisputeInput
  }

  export type DisputeCreateOrConnectWithoutCustomerInput = {
    where: DisputeWhereUniqueInput
    create: XOR<DisputeCreateWithoutCustomerInput, DisputeUncheckedCreateWithoutCustomerInput>
  }

  export type DisputeCreateManyCustomerInputEnvelope = {
    data: DisputeCreateManyCustomerInput | DisputeCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type TransactionUpsertWithWhereUniqueWithoutCustomerInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutCustomerInput, TransactionUncheckedUpdateWithoutCustomerInput>
    create: XOR<TransactionCreateWithoutCustomerInput, TransactionUncheckedCreateWithoutCustomerInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutCustomerInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutCustomerInput, TransactionUncheckedUpdateWithoutCustomerInput>
  }

  export type TransactionUpdateManyWithWhereWithoutCustomerInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutCustomerInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: StringFilter<"Transaction"> | string
    customerId?: StringFilter<"Transaction"> | string
    reference?: StringFilter<"Transaction"> | string
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Transaction"> | string
    description?: StringFilter<"Transaction"> | string
    transactionDate?: DateTimeFilter<"Transaction"> | Date | string
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type DisputeUpsertWithWhereUniqueWithoutCustomerInput = {
    where: DisputeWhereUniqueInput
    update: XOR<DisputeUpdateWithoutCustomerInput, DisputeUncheckedUpdateWithoutCustomerInput>
    create: XOR<DisputeCreateWithoutCustomerInput, DisputeUncheckedCreateWithoutCustomerInput>
  }

  export type DisputeUpdateWithWhereUniqueWithoutCustomerInput = {
    where: DisputeWhereUniqueInput
    data: XOR<DisputeUpdateWithoutCustomerInput, DisputeUncheckedUpdateWithoutCustomerInput>
  }

  export type DisputeUpdateManyWithWhereWithoutCustomerInput = {
    where: DisputeScalarWhereInput
    data: XOR<DisputeUpdateManyMutationInput, DisputeUncheckedUpdateManyWithoutCustomerInput>
  }

  export type DisputeScalarWhereInput = {
    AND?: DisputeScalarWhereInput | DisputeScalarWhereInput[]
    OR?: DisputeScalarWhereInput[]
    NOT?: DisputeScalarWhereInput | DisputeScalarWhereInput[]
    id?: StringFilter<"Dispute"> | string
    transactionId?: StringFilter<"Dispute"> | string
    customerId?: StringFilter<"Dispute"> | string
    reason?: StringFilter<"Dispute"> | string
    description?: StringFilter<"Dispute"> | string
    status?: EnumDisputeStatusFilter<"Dispute"> | $Enums.DisputeStatus
    createdAt?: DateTimeFilter<"Dispute"> | Date | string
    updatedAt?: DateTimeFilter<"Dispute"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"Dispute"> | Date | string | null
  }

  export type CustomerCreateWithoutTransactionsInput = {
    id?: string
    customerNumber: string
    firstName: string
    lastName: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    disputes?: DisputeCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutTransactionsInput = {
    id?: string
    customerNumber: string
    firstName: string
    lastName: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    disputes?: DisputeUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutTransactionsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutTransactionsInput, CustomerUncheckedCreateWithoutTransactionsInput>
  }

  export type DisputeCreateWithoutTransactionInput = {
    id?: string
    reason: string
    description: string
    status?: $Enums.DisputeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
    customer: CustomerCreateNestedOneWithoutDisputesInput
    history?: DisputeHistoryCreateNestedManyWithoutDisputeInput
  }

  export type DisputeUncheckedCreateWithoutTransactionInput = {
    id?: string
    customerId: string
    reason: string
    description: string
    status?: $Enums.DisputeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
    history?: DisputeHistoryUncheckedCreateNestedManyWithoutDisputeInput
  }

  export type DisputeCreateOrConnectWithoutTransactionInput = {
    where: DisputeWhereUniqueInput
    create: XOR<DisputeCreateWithoutTransactionInput, DisputeUncheckedCreateWithoutTransactionInput>
  }

  export type DisputeCreateManyTransactionInputEnvelope = {
    data: DisputeCreateManyTransactionInput | DisputeCreateManyTransactionInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithoutTransactionsInput = {
    update: XOR<CustomerUpdateWithoutTransactionsInput, CustomerUncheckedUpdateWithoutTransactionsInput>
    create: XOR<CustomerCreateWithoutTransactionsInput, CustomerUncheckedCreateWithoutTransactionsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutTransactionsInput, CustomerUncheckedUpdateWithoutTransactionsInput>
  }

  export type CustomerUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disputes?: DisputeUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disputes?: DisputeUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type DisputeUpsertWithWhereUniqueWithoutTransactionInput = {
    where: DisputeWhereUniqueInput
    update: XOR<DisputeUpdateWithoutTransactionInput, DisputeUncheckedUpdateWithoutTransactionInput>
    create: XOR<DisputeCreateWithoutTransactionInput, DisputeUncheckedCreateWithoutTransactionInput>
  }

  export type DisputeUpdateWithWhereUniqueWithoutTransactionInput = {
    where: DisputeWhereUniqueInput
    data: XOR<DisputeUpdateWithoutTransactionInput, DisputeUncheckedUpdateWithoutTransactionInput>
  }

  export type DisputeUpdateManyWithWhereWithoutTransactionInput = {
    where: DisputeScalarWhereInput
    data: XOR<DisputeUpdateManyMutationInput, DisputeUncheckedUpdateManyWithoutTransactionInput>
  }

  export type TransactionCreateWithoutDisputesInput = {
    id?: string
    reference: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    description: string
    transactionDate: Date | string
    status: $Enums.TransactionStatus
    createdAt?: Date | string
    customer: CustomerCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutDisputesInput = {
    id?: string
    customerId: string
    reference: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    description: string
    transactionDate: Date | string
    status: $Enums.TransactionStatus
    createdAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutDisputesInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutDisputesInput, TransactionUncheckedCreateWithoutDisputesInput>
  }

  export type CustomerCreateWithoutDisputesInput = {
    id?: string
    customerNumber: string
    firstName: string
    lastName: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutDisputesInput = {
    id?: string
    customerNumber: string
    firstName: string
    lastName: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutDisputesInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutDisputesInput, CustomerUncheckedCreateWithoutDisputesInput>
  }

  export type DisputeHistoryCreateWithoutDisputeInput = {
    id?: string
    status: $Enums.DisputeStatus
    comment?: string | null
    createdAt?: Date | string
  }

  export type DisputeHistoryUncheckedCreateWithoutDisputeInput = {
    id?: string
    status: $Enums.DisputeStatus
    comment?: string | null
    createdAt?: Date | string
  }

  export type DisputeHistoryCreateOrConnectWithoutDisputeInput = {
    where: DisputeHistoryWhereUniqueInput
    create: XOR<DisputeHistoryCreateWithoutDisputeInput, DisputeHistoryUncheckedCreateWithoutDisputeInput>
  }

  export type DisputeHistoryCreateManyDisputeInputEnvelope = {
    data: DisputeHistoryCreateManyDisputeInput | DisputeHistoryCreateManyDisputeInput[]
    skipDuplicates?: boolean
  }

  export type TransactionUpsertWithoutDisputesInput = {
    update: XOR<TransactionUpdateWithoutDisputesInput, TransactionUncheckedUpdateWithoutDisputesInput>
    create: XOR<TransactionCreateWithoutDisputesInput, TransactionUncheckedCreateWithoutDisputesInput>
    where?: TransactionWhereInput
  }

  export type TransactionUpdateToOneWithWhereWithoutDisputesInput = {
    where?: TransactionWhereInput
    data: XOR<TransactionUpdateWithoutDisputesInput, TransactionUncheckedUpdateWithoutDisputesInput>
  }

  export type TransactionUpdateWithoutDisputesInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutDisputesInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUpsertWithoutDisputesInput = {
    update: XOR<CustomerUpdateWithoutDisputesInput, CustomerUncheckedUpdateWithoutDisputesInput>
    create: XOR<CustomerCreateWithoutDisputesInput, CustomerUncheckedCreateWithoutDisputesInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutDisputesInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutDisputesInput, CustomerUncheckedUpdateWithoutDisputesInput>
  }

  export type CustomerUpdateWithoutDisputesInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutDisputesInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type DisputeHistoryUpsertWithWhereUniqueWithoutDisputeInput = {
    where: DisputeHistoryWhereUniqueInput
    update: XOR<DisputeHistoryUpdateWithoutDisputeInput, DisputeHistoryUncheckedUpdateWithoutDisputeInput>
    create: XOR<DisputeHistoryCreateWithoutDisputeInput, DisputeHistoryUncheckedCreateWithoutDisputeInput>
  }

  export type DisputeHistoryUpdateWithWhereUniqueWithoutDisputeInput = {
    where: DisputeHistoryWhereUniqueInput
    data: XOR<DisputeHistoryUpdateWithoutDisputeInput, DisputeHistoryUncheckedUpdateWithoutDisputeInput>
  }

  export type DisputeHistoryUpdateManyWithWhereWithoutDisputeInput = {
    where: DisputeHistoryScalarWhereInput
    data: XOR<DisputeHistoryUpdateManyMutationInput, DisputeHistoryUncheckedUpdateManyWithoutDisputeInput>
  }

  export type DisputeHistoryScalarWhereInput = {
    AND?: DisputeHistoryScalarWhereInput | DisputeHistoryScalarWhereInput[]
    OR?: DisputeHistoryScalarWhereInput[]
    NOT?: DisputeHistoryScalarWhereInput | DisputeHistoryScalarWhereInput[]
    id?: StringFilter<"DisputeHistory"> | string
    disputeId?: StringFilter<"DisputeHistory"> | string
    status?: EnumDisputeStatusFilter<"DisputeHistory"> | $Enums.DisputeStatus
    comment?: StringNullableFilter<"DisputeHistory"> | string | null
    createdAt?: DateTimeFilter<"DisputeHistory"> | Date | string
  }

  export type DisputeCreateWithoutHistoryInput = {
    id?: string
    reason: string
    description: string
    status?: $Enums.DisputeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
    transaction: TransactionCreateNestedOneWithoutDisputesInput
    customer: CustomerCreateNestedOneWithoutDisputesInput
  }

  export type DisputeUncheckedCreateWithoutHistoryInput = {
    id?: string
    transactionId: string
    customerId: string
    reason: string
    description: string
    status?: $Enums.DisputeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type DisputeCreateOrConnectWithoutHistoryInput = {
    where: DisputeWhereUniqueInput
    create: XOR<DisputeCreateWithoutHistoryInput, DisputeUncheckedCreateWithoutHistoryInput>
  }

  export type DisputeUpsertWithoutHistoryInput = {
    update: XOR<DisputeUpdateWithoutHistoryInput, DisputeUncheckedUpdateWithoutHistoryInput>
    create: XOR<DisputeCreateWithoutHistoryInput, DisputeUncheckedCreateWithoutHistoryInput>
    where?: DisputeWhereInput
  }

  export type DisputeUpdateToOneWithWhereWithoutHistoryInput = {
    where?: DisputeWhereInput
    data: XOR<DisputeUpdateWithoutHistoryInput, DisputeUncheckedUpdateWithoutHistoryInput>
  }

  export type DisputeUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transaction?: TransactionUpdateOneRequiredWithoutDisputesNestedInput
    customer?: CustomerUpdateOneRequiredWithoutDisputesNestedInput
  }

  export type DisputeUncheckedUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionCreateManyCustomerInput = {
    id?: string
    reference: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    description: string
    transactionDate: Date | string
    status: $Enums.TransactionStatus
    createdAt?: Date | string
  }

  export type DisputeCreateManyCustomerInput = {
    id?: string
    transactionId: string
    reason: string
    description: string
    status?: $Enums.DisputeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type TransactionUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disputes?: DisputeUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disputes?: DisputeUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisputeUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transaction?: TransactionUpdateOneRequiredWithoutDisputesNestedInput
    history?: DisputeHistoryUpdateManyWithoutDisputeNestedInput
  }

  export type DisputeUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    history?: DisputeHistoryUncheckedUpdateManyWithoutDisputeNestedInput
  }

  export type DisputeUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DisputeCreateManyTransactionInput = {
    id?: string
    customerId: string
    reason: string
    description: string
    status?: $Enums.DisputeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type DisputeUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: CustomerUpdateOneRequiredWithoutDisputesNestedInput
    history?: DisputeHistoryUpdateManyWithoutDisputeNestedInput
  }

  export type DisputeUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    history?: DisputeHistoryUncheckedUpdateManyWithoutDisputeNestedInput
  }

  export type DisputeUncheckedUpdateManyWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DisputeHistoryCreateManyDisputeInput = {
    id?: string
    status: $Enums.DisputeStatus
    comment?: string | null
    createdAt?: Date | string
  }

  export type DisputeHistoryUpdateWithoutDisputeInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisputeHistoryUncheckedUpdateWithoutDisputeInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisputeHistoryUncheckedUpdateManyWithoutDisputeInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}