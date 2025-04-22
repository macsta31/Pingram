
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Template
 * 
 */
export type Template = $Result.DefaultSelection<Prisma.$TemplatePayload>
/**
 * Model SequenceTemplate
 * 
 */
export type SequenceTemplate = $Result.DefaultSelection<Prisma.$SequenceTemplatePayload>
/**
 * Model SequenceStep
 * 
 */
export type SequenceStep = $Result.DefaultSelection<Prisma.$SequenceStepPayload>
/**
 * Model Sequence
 * 
 */
export type Sequence = $Result.DefaultSelection<Prisma.$SequencePayload>
/**
 * Model Reminder
 * 
 */
export type Reminder = $Result.DefaultSelection<Prisma.$ReminderPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.template`: Exposes CRUD operations for the **Template** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Templates
    * const templates = await prisma.template.findMany()
    * ```
    */
  get template(): Prisma.TemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sequenceTemplate`: Exposes CRUD operations for the **SequenceTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SequenceTemplates
    * const sequenceTemplates = await prisma.sequenceTemplate.findMany()
    * ```
    */
  get sequenceTemplate(): Prisma.SequenceTemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sequenceStep`: Exposes CRUD operations for the **SequenceStep** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SequenceSteps
    * const sequenceSteps = await prisma.sequenceStep.findMany()
    * ```
    */
  get sequenceStep(): Prisma.SequenceStepDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sequence`: Exposes CRUD operations for the **Sequence** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sequences
    * const sequences = await prisma.sequence.findMany()
    * ```
    */
  get sequence(): Prisma.SequenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reminder`: Exposes CRUD operations for the **Reminder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reminders
    * const reminders = await prisma.reminder.findMany()
    * ```
    */
  get reminder(): Prisma.ReminderDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
      (Without<T, U> & U) | (Without<U, T> & T)
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
    Account: 'Account',
    Customer: 'Customer',
    Template: 'Template',
    SequenceTemplate: 'SequenceTemplate',
    SequenceStep: 'SequenceStep',
    Sequence: 'Sequence',
    Reminder: 'Reminder'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "account" | "customer" | "template" | "sequenceTemplate" | "sequenceStep" | "sequence" | "reminder"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
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
      Template: {
        payload: Prisma.$TemplatePayload<ExtArgs>
        fields: Prisma.TemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          findFirst: {
            args: Prisma.TemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          findMany: {
            args: Prisma.TemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          create: {
            args: Prisma.TemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          createMany: {
            args: Prisma.TemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          delete: {
            args: Prisma.TemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          update: {
            args: Prisma.TemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          deleteMany: {
            args: Prisma.TemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          upsert: {
            args: Prisma.TemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          aggregate: {
            args: Prisma.TemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemplate>
          }
          groupBy: {
            args: Prisma.TemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<TemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.TemplateCountArgs<ExtArgs>
            result: $Utils.Optional<TemplateCountAggregateOutputType> | number
          }
        }
      }
      SequenceTemplate: {
        payload: Prisma.$SequenceTemplatePayload<ExtArgs>
        fields: Prisma.SequenceTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SequenceTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequenceTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SequenceTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequenceTemplatePayload>
          }
          findFirst: {
            args: Prisma.SequenceTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequenceTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SequenceTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequenceTemplatePayload>
          }
          findMany: {
            args: Prisma.SequenceTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequenceTemplatePayload>[]
          }
          create: {
            args: Prisma.SequenceTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequenceTemplatePayload>
          }
          createMany: {
            args: Prisma.SequenceTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SequenceTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequenceTemplatePayload>[]
          }
          delete: {
            args: Prisma.SequenceTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequenceTemplatePayload>
          }
          update: {
            args: Prisma.SequenceTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequenceTemplatePayload>
          }
          deleteMany: {
            args: Prisma.SequenceTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SequenceTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SequenceTemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequenceTemplatePayload>[]
          }
          upsert: {
            args: Prisma.SequenceTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequenceTemplatePayload>
          }
          aggregate: {
            args: Prisma.SequenceTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSequenceTemplate>
          }
          groupBy: {
            args: Prisma.SequenceTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<SequenceTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.SequenceTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<SequenceTemplateCountAggregateOutputType> | number
          }
        }
      }
      SequenceStep: {
        payload: Prisma.$SequenceStepPayload<ExtArgs>
        fields: Prisma.SequenceStepFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SequenceStepFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequenceStepPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SequenceStepFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequenceStepPayload>
          }
          findFirst: {
            args: Prisma.SequenceStepFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequenceStepPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SequenceStepFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequenceStepPayload>
          }
          findMany: {
            args: Prisma.SequenceStepFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequenceStepPayload>[]
          }
          create: {
            args: Prisma.SequenceStepCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequenceStepPayload>
          }
          createMany: {
            args: Prisma.SequenceStepCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SequenceStepCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequenceStepPayload>[]
          }
          delete: {
            args: Prisma.SequenceStepDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequenceStepPayload>
          }
          update: {
            args: Prisma.SequenceStepUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequenceStepPayload>
          }
          deleteMany: {
            args: Prisma.SequenceStepDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SequenceStepUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SequenceStepUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequenceStepPayload>[]
          }
          upsert: {
            args: Prisma.SequenceStepUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequenceStepPayload>
          }
          aggregate: {
            args: Prisma.SequenceStepAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSequenceStep>
          }
          groupBy: {
            args: Prisma.SequenceStepGroupByArgs<ExtArgs>
            result: $Utils.Optional<SequenceStepGroupByOutputType>[]
          }
          count: {
            args: Prisma.SequenceStepCountArgs<ExtArgs>
            result: $Utils.Optional<SequenceStepCountAggregateOutputType> | number
          }
        }
      }
      Sequence: {
        payload: Prisma.$SequencePayload<ExtArgs>
        fields: Prisma.SequenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SequenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SequenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequencePayload>
          }
          findFirst: {
            args: Prisma.SequenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SequenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequencePayload>
          }
          findMany: {
            args: Prisma.SequenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequencePayload>[]
          }
          create: {
            args: Prisma.SequenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequencePayload>
          }
          createMany: {
            args: Prisma.SequenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SequenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequencePayload>[]
          }
          delete: {
            args: Prisma.SequenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequencePayload>
          }
          update: {
            args: Prisma.SequenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequencePayload>
          }
          deleteMany: {
            args: Prisma.SequenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SequenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SequenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequencePayload>[]
          }
          upsert: {
            args: Prisma.SequenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequencePayload>
          }
          aggregate: {
            args: Prisma.SequenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSequence>
          }
          groupBy: {
            args: Prisma.SequenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<SequenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.SequenceCountArgs<ExtArgs>
            result: $Utils.Optional<SequenceCountAggregateOutputType> | number
          }
        }
      }
      Reminder: {
        payload: Prisma.$ReminderPayload<ExtArgs>
        fields: Prisma.ReminderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReminderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReminderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          findFirst: {
            args: Prisma.ReminderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReminderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          findMany: {
            args: Prisma.ReminderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>[]
          }
          create: {
            args: Prisma.ReminderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          createMany: {
            args: Prisma.ReminderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReminderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>[]
          }
          delete: {
            args: Prisma.ReminderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          update: {
            args: Prisma.ReminderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          deleteMany: {
            args: Prisma.ReminderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReminderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReminderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>[]
          }
          upsert: {
            args: Prisma.ReminderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          aggregate: {
            args: Prisma.ReminderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReminder>
          }
          groupBy: {
            args: Prisma.ReminderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReminderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReminderCountArgs<ExtArgs>
            result: $Utils.Optional<ReminderCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    account?: AccountOmit
    customer?: CustomerOmit
    template?: TemplateOmit
    sequenceTemplate?: SequenceTemplateOmit
    sequenceStep?: SequenceStepOmit
    sequence?: SequenceOmit
    reminder?: ReminderOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type AccountCountOutputType
   */

  export type AccountCountOutputType = {
    templates: number
    sequenceTemplates: number
    customers: number
    sequences: number
    reminders: number
  }

  export type AccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    templates?: boolean | AccountCountOutputTypeCountTemplatesArgs
    sequenceTemplates?: boolean | AccountCountOutputTypeCountSequenceTemplatesArgs
    customers?: boolean | AccountCountOutputTypeCountCustomersArgs
    sequences?: boolean | AccountCountOutputTypeCountSequencesArgs
    reminders?: boolean | AccountCountOutputTypeCountRemindersArgs
  }

  // Custom InputTypes
  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountCountOutputType
     */
    select?: AccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateWhereInput
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountSequenceTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SequenceTemplateWhereInput
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountCustomersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountSequencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SequenceWhereInput
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountRemindersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReminderWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    reminders: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reminders?: boolean | CustomerCountOutputTypeCountRemindersArgs
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
  export type CustomerCountOutputTypeCountRemindersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReminderWhereInput
  }


  /**
   * Count Type TemplateCountOutputType
   */

  export type TemplateCountOutputType = {
    sequenceSteps: number
    reminders: number
  }

  export type TemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sequenceSteps?: boolean | TemplateCountOutputTypeCountSequenceStepsArgs
    reminders?: boolean | TemplateCountOutputTypeCountRemindersArgs
  }

  // Custom InputTypes
  /**
   * TemplateCountOutputType without action
   */
  export type TemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateCountOutputType
     */
    select?: TemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TemplateCountOutputType without action
   */
  export type TemplateCountOutputTypeCountSequenceStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SequenceStepWhereInput
  }

  /**
   * TemplateCountOutputType without action
   */
  export type TemplateCountOutputTypeCountRemindersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReminderWhereInput
  }


  /**
   * Count Type SequenceTemplateCountOutputType
   */

  export type SequenceTemplateCountOutputType = {
    steps: number
    sequences: number
  }

  export type SequenceTemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    steps?: boolean | SequenceTemplateCountOutputTypeCountStepsArgs
    sequences?: boolean | SequenceTemplateCountOutputTypeCountSequencesArgs
  }

  // Custom InputTypes
  /**
   * SequenceTemplateCountOutputType without action
   */
  export type SequenceTemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceTemplateCountOutputType
     */
    select?: SequenceTemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SequenceTemplateCountOutputType without action
   */
  export type SequenceTemplateCountOutputTypeCountStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SequenceStepWhereInput
  }

  /**
   * SequenceTemplateCountOutputType without action
   */
  export type SequenceTemplateCountOutputTypeCountSequencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SequenceWhereInput
  }


  /**
   * Count Type SequenceCountOutputType
   */

  export type SequenceCountOutputType = {
    reminders: number
  }

  export type SequenceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reminders?: boolean | SequenceCountOutputTypeCountRemindersArgs
  }

  // Custom InputTypes
  /**
   * SequenceCountOutputType without action
   */
  export type SequenceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceCountOutputType
     */
    select?: SequenceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SequenceCountOutputType without action
   */
  export type SequenceCountOutputTypeCountRemindersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReminderWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    name: string | null
    apiKey: string | null
    createdAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    name: string | null
    apiKey: string | null
    createdAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    name: number
    apiKey: number
    createdAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    name?: true
    apiKey?: true
    createdAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    name?: true
    apiKey?: true
    createdAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    name?: true
    apiKey?: true
    createdAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    name: string
    apiKey: string
    createdAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    apiKey?: boolean
    createdAt?: boolean
    templates?: boolean | Account$templatesArgs<ExtArgs>
    sequenceTemplates?: boolean | Account$sequenceTemplatesArgs<ExtArgs>
    customers?: boolean | Account$customersArgs<ExtArgs>
    sequences?: boolean | Account$sequencesArgs<ExtArgs>
    reminders?: boolean | Account$remindersArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    apiKey?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    apiKey?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    name?: boolean
    apiKey?: boolean
    createdAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "apiKey" | "createdAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    templates?: boolean | Account$templatesArgs<ExtArgs>
    sequenceTemplates?: boolean | Account$sequenceTemplatesArgs<ExtArgs>
    customers?: boolean | Account$customersArgs<ExtArgs>
    sequences?: boolean | Account$sequencesArgs<ExtArgs>
    reminders?: boolean | Account$remindersArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      templates: Prisma.$TemplatePayload<ExtArgs>[]
      sequenceTemplates: Prisma.$SequenceTemplatePayload<ExtArgs>[]
      customers: Prisma.$CustomerPayload<ExtArgs>[]
      sequences: Prisma.$SequencePayload<ExtArgs>[]
      reminders: Prisma.$ReminderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      apiKey: string
      createdAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    templates<T extends Account$templatesArgs<ExtArgs> = {}>(args?: Subset<T, Account$templatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sequenceTemplates<T extends Account$sequenceTemplatesArgs<ExtArgs> = {}>(args?: Subset<T, Account$sequenceTemplatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SequenceTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    customers<T extends Account$customersArgs<ExtArgs> = {}>(args?: Subset<T, Account$customersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sequences<T extends Account$sequencesArgs<ExtArgs> = {}>(args?: Subset<T, Account$sequencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SequencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reminders<T extends Account$remindersArgs<ExtArgs> = {}>(args?: Subset<T, Account$remindersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly name: FieldRef<"Account", 'String'>
    readonly apiKey: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account.templates
   */
  export type Account$templatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    where?: TemplateWhereInput
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    cursor?: TemplateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Account.sequenceTemplates
   */
  export type Account$sequenceTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceTemplate
     */
    select?: SequenceTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SequenceTemplate
     */
    omit?: SequenceTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceTemplateInclude<ExtArgs> | null
    where?: SequenceTemplateWhereInput
    orderBy?: SequenceTemplateOrderByWithRelationInput | SequenceTemplateOrderByWithRelationInput[]
    cursor?: SequenceTemplateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SequenceTemplateScalarFieldEnum | SequenceTemplateScalarFieldEnum[]
  }

  /**
   * Account.customers
   */
  export type Account$customersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    cursor?: CustomerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Account.sequences
   */
  export type Account$sequencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sequence
     */
    select?: SequenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sequence
     */
    omit?: SequenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceInclude<ExtArgs> | null
    where?: SequenceWhereInput
    orderBy?: SequenceOrderByWithRelationInput | SequenceOrderByWithRelationInput[]
    cursor?: SequenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SequenceScalarFieldEnum | SequenceScalarFieldEnum[]
  }

  /**
   * Account.reminders
   */
  export type Account$remindersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    where?: ReminderWhereInput
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    cursor?: ReminderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


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
    accountId: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phoneNumber: string | null
    externalId: string | null
    createdAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phoneNumber: string | null
    externalId: string | null
    createdAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    accountId: number
    firstName: number
    lastName: number
    email: number
    phoneNumber: number
    externalId: number
    createdAt: number
    _all: number
  }


  export type CustomerMinAggregateInputType = {
    id?: true
    accountId?: true
    firstName?: true
    lastName?: true
    email?: true
    phoneNumber?: true
    externalId?: true
    createdAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    accountId?: true
    firstName?: true
    lastName?: true
    email?: true
    phoneNumber?: true
    externalId?: true
    createdAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    accountId?: true
    firstName?: true
    lastName?: true
    email?: true
    phoneNumber?: true
    externalId?: true
    createdAt?: true
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
    accountId: string
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    externalId: string
    createdAt: Date
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
    accountId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phoneNumber?: boolean
    externalId?: boolean
    createdAt?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
    reminders?: boolean | Customer$remindersArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phoneNumber?: boolean
    externalId?: boolean
    createdAt?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phoneNumber?: boolean
    externalId?: boolean
    createdAt?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    accountId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phoneNumber?: boolean
    externalId?: boolean
    createdAt?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "firstName" | "lastName" | "email" | "phoneNumber" | "externalId" | "createdAt", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
    reminders?: boolean | Customer$remindersArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      account: Prisma.$AccountPayload<ExtArgs>
      reminders: Prisma.$ReminderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      firstName: string
      lastName: string
      email: string
      phoneNumber: string
      externalId: string
      createdAt: Date
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
    account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reminders<T extends Customer$remindersArgs<ExtArgs> = {}>(args?: Subset<T, Customer$remindersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly accountId: FieldRef<"Customer", 'String'>
    readonly firstName: FieldRef<"Customer", 'String'>
    readonly lastName: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly phoneNumber: FieldRef<"Customer", 'String'>
    readonly externalId: FieldRef<"Customer", 'String'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * Customer.reminders
   */
  export type Customer$remindersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    where?: ReminderWhereInput
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    cursor?: ReminderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
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
   * Model Template
   */

  export type AggregateTemplate = {
    _count: TemplateCountAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  export type TemplateMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    name: string | null
    channel: string | null
    content: string | null
  }

  export type TemplateMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    name: string | null
    channel: string | null
    content: string | null
  }

  export type TemplateCountAggregateOutputType = {
    id: number
    accountId: number
    name: number
    channel: number
    content: number
    _all: number
  }


  export type TemplateMinAggregateInputType = {
    id?: true
    accountId?: true
    name?: true
    channel?: true
    content?: true
  }

  export type TemplateMaxAggregateInputType = {
    id?: true
    accountId?: true
    name?: true
    channel?: true
    content?: true
  }

  export type TemplateCountAggregateInputType = {
    id?: true
    accountId?: true
    name?: true
    channel?: true
    content?: true
    _all?: true
  }

  export type TemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Template to aggregate.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Templates
    **/
    _count?: true | TemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemplateMaxAggregateInputType
  }

  export type GetTemplateAggregateType<T extends TemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemplate[P]>
      : GetScalarType<T[P], AggregateTemplate[P]>
  }




  export type TemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateWhereInput
    orderBy?: TemplateOrderByWithAggregationInput | TemplateOrderByWithAggregationInput[]
    by: TemplateScalarFieldEnum[] | TemplateScalarFieldEnum
    having?: TemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemplateCountAggregateInputType | true
    _min?: TemplateMinAggregateInputType
    _max?: TemplateMaxAggregateInputType
  }

  export type TemplateGroupByOutputType = {
    id: string
    accountId: string
    name: string
    channel: string
    content: string
    _count: TemplateCountAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  type GetTemplateGroupByPayload<T extends TemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemplateGroupByOutputType[P]>
            : GetScalarType<T[P], TemplateGroupByOutputType[P]>
        }
      >
    >


  export type TemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    name?: boolean
    channel?: boolean
    content?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
    sequenceSteps?: boolean | Template$sequenceStepsArgs<ExtArgs>
    reminders?: boolean | Template$remindersArgs<ExtArgs>
    _count?: boolean | TemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    name?: boolean
    channel?: boolean
    content?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    name?: boolean
    channel?: boolean
    content?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectScalar = {
    id?: boolean
    accountId?: boolean
    name?: boolean
    channel?: boolean
    content?: boolean
  }

  export type TemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "name" | "channel" | "content", ExtArgs["result"]["template"]>
  export type TemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
    sequenceSteps?: boolean | Template$sequenceStepsArgs<ExtArgs>
    reminders?: boolean | Template$remindersArgs<ExtArgs>
    _count?: boolean | TemplateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }
  export type TemplateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }

  export type $TemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Template"
    objects: {
      account: Prisma.$AccountPayload<ExtArgs>
      sequenceSteps: Prisma.$SequenceStepPayload<ExtArgs>[]
      reminders: Prisma.$ReminderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      name: string
      channel: string
      content: string
    }, ExtArgs["result"]["template"]>
    composites: {}
  }

  type TemplateGetPayload<S extends boolean | null | undefined | TemplateDefaultArgs> = $Result.GetResult<Prisma.$TemplatePayload, S>

  type TemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TemplateCountAggregateInputType | true
    }

  export interface TemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Template'], meta: { name: 'Template' } }
    /**
     * Find zero or one Template that matches the filter.
     * @param {TemplateFindUniqueArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TemplateFindUniqueArgs>(args: SelectSubset<T, TemplateFindUniqueArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Template that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TemplateFindUniqueOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, TemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Template that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TemplateFindFirstArgs>(args?: SelectSubset<T, TemplateFindFirstArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Template that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, TemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Templates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Templates
     * const templates = await prisma.template.findMany()
     * 
     * // Get first 10 Templates
     * const templates = await prisma.template.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const templateWithIdOnly = await prisma.template.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TemplateFindManyArgs>(args?: SelectSubset<T, TemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Template.
     * @param {TemplateCreateArgs} args - Arguments to create a Template.
     * @example
     * // Create one Template
     * const Template = await prisma.template.create({
     *   data: {
     *     // ... data to create a Template
     *   }
     * })
     * 
     */
    create<T extends TemplateCreateArgs>(args: SelectSubset<T, TemplateCreateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Templates.
     * @param {TemplateCreateManyArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const template = await prisma.template.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TemplateCreateManyArgs>(args?: SelectSubset<T, TemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Templates and returns the data saved in the database.
     * @param {TemplateCreateManyAndReturnArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const template = await prisma.template.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Templates and only return the `id`
     * const templateWithIdOnly = await prisma.template.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, TemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Template.
     * @param {TemplateDeleteArgs} args - Arguments to delete one Template.
     * @example
     * // Delete one Template
     * const Template = await prisma.template.delete({
     *   where: {
     *     // ... filter to delete one Template
     *   }
     * })
     * 
     */
    delete<T extends TemplateDeleteArgs>(args: SelectSubset<T, TemplateDeleteArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Template.
     * @param {TemplateUpdateArgs} args - Arguments to update one Template.
     * @example
     * // Update one Template
     * const template = await prisma.template.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TemplateUpdateArgs>(args: SelectSubset<T, TemplateUpdateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Templates.
     * @param {TemplateDeleteManyArgs} args - Arguments to filter Templates to delete.
     * @example
     * // Delete a few Templates
     * const { count } = await prisma.template.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TemplateDeleteManyArgs>(args?: SelectSubset<T, TemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Templates
     * const template = await prisma.template.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TemplateUpdateManyArgs>(args: SelectSubset<T, TemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Templates and returns the data updated in the database.
     * @param {TemplateUpdateManyAndReturnArgs} args - Arguments to update many Templates.
     * @example
     * // Update many Templates
     * const template = await prisma.template.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Templates and only return the `id`
     * const templateWithIdOnly = await prisma.template.updateManyAndReturn({
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
    updateManyAndReturn<T extends TemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, TemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Template.
     * @param {TemplateUpsertArgs} args - Arguments to update or create a Template.
     * @example
     * // Update or create a Template
     * const template = await prisma.template.upsert({
     *   create: {
     *     // ... data to create a Template
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Template we want to update
     *   }
     * })
     */
    upsert<T extends TemplateUpsertArgs>(args: SelectSubset<T, TemplateUpsertArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateCountArgs} args - Arguments to filter Templates to count.
     * @example
     * // Count the number of Templates
     * const count = await prisma.template.count({
     *   where: {
     *     // ... the filter for the Templates we want to count
     *   }
     * })
    **/
    count<T extends TemplateCountArgs>(
      args?: Subset<T, TemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TemplateAggregateArgs>(args: Subset<T, TemplateAggregateArgs>): Prisma.PrismaPromise<GetTemplateAggregateType<T>>

    /**
     * Group by Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateGroupByArgs} args - Group by arguments.
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
      T extends TemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemplateGroupByArgs['orderBy'] }
        : { orderBy?: TemplateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Template model
   */
  readonly fields: TemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Template.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sequenceSteps<T extends Template$sequenceStepsArgs<ExtArgs> = {}>(args?: Subset<T, Template$sequenceStepsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SequenceStepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reminders<T extends Template$remindersArgs<ExtArgs> = {}>(args?: Subset<T, Template$remindersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Template model
   */
  interface TemplateFieldRefs {
    readonly id: FieldRef<"Template", 'String'>
    readonly accountId: FieldRef<"Template", 'String'>
    readonly name: FieldRef<"Template", 'String'>
    readonly channel: FieldRef<"Template", 'String'>
    readonly content: FieldRef<"Template", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Template findUnique
   */
  export type TemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template findUniqueOrThrow
   */
  export type TemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template findFirst
   */
  export type TemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template findFirstOrThrow
   */
  export type TemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template findMany
   */
  export type TemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Templates to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template create
   */
  export type TemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a Template.
     */
    data: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>
  }

  /**
   * Template createMany
   */
  export type TemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Templates.
     */
    data: TemplateCreateManyInput | TemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Template createManyAndReturn
   */
  export type TemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * The data used to create many Templates.
     */
    data: TemplateCreateManyInput | TemplateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Template update
   */
  export type TemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a Template.
     */
    data: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>
    /**
     * Choose, which Template to update.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template updateMany
   */
  export type TemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Templates.
     */
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyInput>
    /**
     * Filter which Templates to update
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to update.
     */
    limit?: number
  }

  /**
   * Template updateManyAndReturn
   */
  export type TemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * The data used to update Templates.
     */
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyInput>
    /**
     * Filter which Templates to update
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Template upsert
   */
  export type TemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the Template to update in case it exists.
     */
    where: TemplateWhereUniqueInput
    /**
     * In case the Template found by the `where` argument doesn't exist, create a new Template with this data.
     */
    create: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>
    /**
     * In case the Template was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>
  }

  /**
   * Template delete
   */
  export type TemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter which Template to delete.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template deleteMany
   */
  export type TemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Templates to delete
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to delete.
     */
    limit?: number
  }

  /**
   * Template.sequenceSteps
   */
  export type Template$sequenceStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceStep
     */
    select?: SequenceStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SequenceStep
     */
    omit?: SequenceStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceStepInclude<ExtArgs> | null
    where?: SequenceStepWhereInput
    orderBy?: SequenceStepOrderByWithRelationInput | SequenceStepOrderByWithRelationInput[]
    cursor?: SequenceStepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SequenceStepScalarFieldEnum | SequenceStepScalarFieldEnum[]
  }

  /**
   * Template.reminders
   */
  export type Template$remindersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    where?: ReminderWhereInput
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    cursor?: ReminderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
  }

  /**
   * Template without action
   */
  export type TemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
  }


  /**
   * Model SequenceTemplate
   */

  export type AggregateSequenceTemplate = {
    _count: SequenceTemplateCountAggregateOutputType | null
    _min: SequenceTemplateMinAggregateOutputType | null
    _max: SequenceTemplateMaxAggregateOutputType | null
  }

  export type SequenceTemplateMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    name: string | null
    cancelOnEvent: string | null
    createdAt: Date | null
  }

  export type SequenceTemplateMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    name: string | null
    cancelOnEvent: string | null
    createdAt: Date | null
  }

  export type SequenceTemplateCountAggregateOutputType = {
    id: number
    accountId: number
    name: number
    cancelOnEvent: number
    createdAt: number
    _all: number
  }


  export type SequenceTemplateMinAggregateInputType = {
    id?: true
    accountId?: true
    name?: true
    cancelOnEvent?: true
    createdAt?: true
  }

  export type SequenceTemplateMaxAggregateInputType = {
    id?: true
    accountId?: true
    name?: true
    cancelOnEvent?: true
    createdAt?: true
  }

  export type SequenceTemplateCountAggregateInputType = {
    id?: true
    accountId?: true
    name?: true
    cancelOnEvent?: true
    createdAt?: true
    _all?: true
  }

  export type SequenceTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SequenceTemplate to aggregate.
     */
    where?: SequenceTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SequenceTemplates to fetch.
     */
    orderBy?: SequenceTemplateOrderByWithRelationInput | SequenceTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SequenceTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SequenceTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SequenceTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SequenceTemplates
    **/
    _count?: true | SequenceTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SequenceTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SequenceTemplateMaxAggregateInputType
  }

  export type GetSequenceTemplateAggregateType<T extends SequenceTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateSequenceTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSequenceTemplate[P]>
      : GetScalarType<T[P], AggregateSequenceTemplate[P]>
  }




  export type SequenceTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SequenceTemplateWhereInput
    orderBy?: SequenceTemplateOrderByWithAggregationInput | SequenceTemplateOrderByWithAggregationInput[]
    by: SequenceTemplateScalarFieldEnum[] | SequenceTemplateScalarFieldEnum
    having?: SequenceTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SequenceTemplateCountAggregateInputType | true
    _min?: SequenceTemplateMinAggregateInputType
    _max?: SequenceTemplateMaxAggregateInputType
  }

  export type SequenceTemplateGroupByOutputType = {
    id: string
    accountId: string
    name: string
    cancelOnEvent: string | null
    createdAt: Date
    _count: SequenceTemplateCountAggregateOutputType | null
    _min: SequenceTemplateMinAggregateOutputType | null
    _max: SequenceTemplateMaxAggregateOutputType | null
  }

  type GetSequenceTemplateGroupByPayload<T extends SequenceTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SequenceTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SequenceTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SequenceTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], SequenceTemplateGroupByOutputType[P]>
        }
      >
    >


  export type SequenceTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    name?: boolean
    cancelOnEvent?: boolean
    createdAt?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
    steps?: boolean | SequenceTemplate$stepsArgs<ExtArgs>
    sequences?: boolean | SequenceTemplate$sequencesArgs<ExtArgs>
    _count?: boolean | SequenceTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sequenceTemplate"]>

  export type SequenceTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    name?: boolean
    cancelOnEvent?: boolean
    createdAt?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sequenceTemplate"]>

  export type SequenceTemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    name?: boolean
    cancelOnEvent?: boolean
    createdAt?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sequenceTemplate"]>

  export type SequenceTemplateSelectScalar = {
    id?: boolean
    accountId?: boolean
    name?: boolean
    cancelOnEvent?: boolean
    createdAt?: boolean
  }

  export type SequenceTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "name" | "cancelOnEvent" | "createdAt", ExtArgs["result"]["sequenceTemplate"]>
  export type SequenceTemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
    steps?: boolean | SequenceTemplate$stepsArgs<ExtArgs>
    sequences?: boolean | SequenceTemplate$sequencesArgs<ExtArgs>
    _count?: boolean | SequenceTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SequenceTemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }
  export type SequenceTemplateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }

  export type $SequenceTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SequenceTemplate"
    objects: {
      account: Prisma.$AccountPayload<ExtArgs>
      steps: Prisma.$SequenceStepPayload<ExtArgs>[]
      sequences: Prisma.$SequencePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      name: string
      cancelOnEvent: string | null
      createdAt: Date
    }, ExtArgs["result"]["sequenceTemplate"]>
    composites: {}
  }

  type SequenceTemplateGetPayload<S extends boolean | null | undefined | SequenceTemplateDefaultArgs> = $Result.GetResult<Prisma.$SequenceTemplatePayload, S>

  type SequenceTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SequenceTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SequenceTemplateCountAggregateInputType | true
    }

  export interface SequenceTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SequenceTemplate'], meta: { name: 'SequenceTemplate' } }
    /**
     * Find zero or one SequenceTemplate that matches the filter.
     * @param {SequenceTemplateFindUniqueArgs} args - Arguments to find a SequenceTemplate
     * @example
     * // Get one SequenceTemplate
     * const sequenceTemplate = await prisma.sequenceTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SequenceTemplateFindUniqueArgs>(args: SelectSubset<T, SequenceTemplateFindUniqueArgs<ExtArgs>>): Prisma__SequenceTemplateClient<$Result.GetResult<Prisma.$SequenceTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SequenceTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SequenceTemplateFindUniqueOrThrowArgs} args - Arguments to find a SequenceTemplate
     * @example
     * // Get one SequenceTemplate
     * const sequenceTemplate = await prisma.sequenceTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SequenceTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, SequenceTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SequenceTemplateClient<$Result.GetResult<Prisma.$SequenceTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SequenceTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequenceTemplateFindFirstArgs} args - Arguments to find a SequenceTemplate
     * @example
     * // Get one SequenceTemplate
     * const sequenceTemplate = await prisma.sequenceTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SequenceTemplateFindFirstArgs>(args?: SelectSubset<T, SequenceTemplateFindFirstArgs<ExtArgs>>): Prisma__SequenceTemplateClient<$Result.GetResult<Prisma.$SequenceTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SequenceTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequenceTemplateFindFirstOrThrowArgs} args - Arguments to find a SequenceTemplate
     * @example
     * // Get one SequenceTemplate
     * const sequenceTemplate = await prisma.sequenceTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SequenceTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, SequenceTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__SequenceTemplateClient<$Result.GetResult<Prisma.$SequenceTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SequenceTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequenceTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SequenceTemplates
     * const sequenceTemplates = await prisma.sequenceTemplate.findMany()
     * 
     * // Get first 10 SequenceTemplates
     * const sequenceTemplates = await prisma.sequenceTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sequenceTemplateWithIdOnly = await prisma.sequenceTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SequenceTemplateFindManyArgs>(args?: SelectSubset<T, SequenceTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SequenceTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SequenceTemplate.
     * @param {SequenceTemplateCreateArgs} args - Arguments to create a SequenceTemplate.
     * @example
     * // Create one SequenceTemplate
     * const SequenceTemplate = await prisma.sequenceTemplate.create({
     *   data: {
     *     // ... data to create a SequenceTemplate
     *   }
     * })
     * 
     */
    create<T extends SequenceTemplateCreateArgs>(args: SelectSubset<T, SequenceTemplateCreateArgs<ExtArgs>>): Prisma__SequenceTemplateClient<$Result.GetResult<Prisma.$SequenceTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SequenceTemplates.
     * @param {SequenceTemplateCreateManyArgs} args - Arguments to create many SequenceTemplates.
     * @example
     * // Create many SequenceTemplates
     * const sequenceTemplate = await prisma.sequenceTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SequenceTemplateCreateManyArgs>(args?: SelectSubset<T, SequenceTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SequenceTemplates and returns the data saved in the database.
     * @param {SequenceTemplateCreateManyAndReturnArgs} args - Arguments to create many SequenceTemplates.
     * @example
     * // Create many SequenceTemplates
     * const sequenceTemplate = await prisma.sequenceTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SequenceTemplates and only return the `id`
     * const sequenceTemplateWithIdOnly = await prisma.sequenceTemplate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SequenceTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, SequenceTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SequenceTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SequenceTemplate.
     * @param {SequenceTemplateDeleteArgs} args - Arguments to delete one SequenceTemplate.
     * @example
     * // Delete one SequenceTemplate
     * const SequenceTemplate = await prisma.sequenceTemplate.delete({
     *   where: {
     *     // ... filter to delete one SequenceTemplate
     *   }
     * })
     * 
     */
    delete<T extends SequenceTemplateDeleteArgs>(args: SelectSubset<T, SequenceTemplateDeleteArgs<ExtArgs>>): Prisma__SequenceTemplateClient<$Result.GetResult<Prisma.$SequenceTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SequenceTemplate.
     * @param {SequenceTemplateUpdateArgs} args - Arguments to update one SequenceTemplate.
     * @example
     * // Update one SequenceTemplate
     * const sequenceTemplate = await prisma.sequenceTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SequenceTemplateUpdateArgs>(args: SelectSubset<T, SequenceTemplateUpdateArgs<ExtArgs>>): Prisma__SequenceTemplateClient<$Result.GetResult<Prisma.$SequenceTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SequenceTemplates.
     * @param {SequenceTemplateDeleteManyArgs} args - Arguments to filter SequenceTemplates to delete.
     * @example
     * // Delete a few SequenceTemplates
     * const { count } = await prisma.sequenceTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SequenceTemplateDeleteManyArgs>(args?: SelectSubset<T, SequenceTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SequenceTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequenceTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SequenceTemplates
     * const sequenceTemplate = await prisma.sequenceTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SequenceTemplateUpdateManyArgs>(args: SelectSubset<T, SequenceTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SequenceTemplates and returns the data updated in the database.
     * @param {SequenceTemplateUpdateManyAndReturnArgs} args - Arguments to update many SequenceTemplates.
     * @example
     * // Update many SequenceTemplates
     * const sequenceTemplate = await prisma.sequenceTemplate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SequenceTemplates and only return the `id`
     * const sequenceTemplateWithIdOnly = await prisma.sequenceTemplate.updateManyAndReturn({
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
    updateManyAndReturn<T extends SequenceTemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, SequenceTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SequenceTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SequenceTemplate.
     * @param {SequenceTemplateUpsertArgs} args - Arguments to update or create a SequenceTemplate.
     * @example
     * // Update or create a SequenceTemplate
     * const sequenceTemplate = await prisma.sequenceTemplate.upsert({
     *   create: {
     *     // ... data to create a SequenceTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SequenceTemplate we want to update
     *   }
     * })
     */
    upsert<T extends SequenceTemplateUpsertArgs>(args: SelectSubset<T, SequenceTemplateUpsertArgs<ExtArgs>>): Prisma__SequenceTemplateClient<$Result.GetResult<Prisma.$SequenceTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SequenceTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequenceTemplateCountArgs} args - Arguments to filter SequenceTemplates to count.
     * @example
     * // Count the number of SequenceTemplates
     * const count = await prisma.sequenceTemplate.count({
     *   where: {
     *     // ... the filter for the SequenceTemplates we want to count
     *   }
     * })
    **/
    count<T extends SequenceTemplateCountArgs>(
      args?: Subset<T, SequenceTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SequenceTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SequenceTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequenceTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SequenceTemplateAggregateArgs>(args: Subset<T, SequenceTemplateAggregateArgs>): Prisma.PrismaPromise<GetSequenceTemplateAggregateType<T>>

    /**
     * Group by SequenceTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequenceTemplateGroupByArgs} args - Group by arguments.
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
      T extends SequenceTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SequenceTemplateGroupByArgs['orderBy'] }
        : { orderBy?: SequenceTemplateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SequenceTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSequenceTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SequenceTemplate model
   */
  readonly fields: SequenceTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SequenceTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SequenceTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    steps<T extends SequenceTemplate$stepsArgs<ExtArgs> = {}>(args?: Subset<T, SequenceTemplate$stepsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SequenceStepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sequences<T extends SequenceTemplate$sequencesArgs<ExtArgs> = {}>(args?: Subset<T, SequenceTemplate$sequencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SequencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SequenceTemplate model
   */
  interface SequenceTemplateFieldRefs {
    readonly id: FieldRef<"SequenceTemplate", 'String'>
    readonly accountId: FieldRef<"SequenceTemplate", 'String'>
    readonly name: FieldRef<"SequenceTemplate", 'String'>
    readonly cancelOnEvent: FieldRef<"SequenceTemplate", 'String'>
    readonly createdAt: FieldRef<"SequenceTemplate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SequenceTemplate findUnique
   */
  export type SequenceTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceTemplate
     */
    select?: SequenceTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SequenceTemplate
     */
    omit?: SequenceTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceTemplateInclude<ExtArgs> | null
    /**
     * Filter, which SequenceTemplate to fetch.
     */
    where: SequenceTemplateWhereUniqueInput
  }

  /**
   * SequenceTemplate findUniqueOrThrow
   */
  export type SequenceTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceTemplate
     */
    select?: SequenceTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SequenceTemplate
     */
    omit?: SequenceTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceTemplateInclude<ExtArgs> | null
    /**
     * Filter, which SequenceTemplate to fetch.
     */
    where: SequenceTemplateWhereUniqueInput
  }

  /**
   * SequenceTemplate findFirst
   */
  export type SequenceTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceTemplate
     */
    select?: SequenceTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SequenceTemplate
     */
    omit?: SequenceTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceTemplateInclude<ExtArgs> | null
    /**
     * Filter, which SequenceTemplate to fetch.
     */
    where?: SequenceTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SequenceTemplates to fetch.
     */
    orderBy?: SequenceTemplateOrderByWithRelationInput | SequenceTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SequenceTemplates.
     */
    cursor?: SequenceTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SequenceTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SequenceTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SequenceTemplates.
     */
    distinct?: SequenceTemplateScalarFieldEnum | SequenceTemplateScalarFieldEnum[]
  }

  /**
   * SequenceTemplate findFirstOrThrow
   */
  export type SequenceTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceTemplate
     */
    select?: SequenceTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SequenceTemplate
     */
    omit?: SequenceTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceTemplateInclude<ExtArgs> | null
    /**
     * Filter, which SequenceTemplate to fetch.
     */
    where?: SequenceTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SequenceTemplates to fetch.
     */
    orderBy?: SequenceTemplateOrderByWithRelationInput | SequenceTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SequenceTemplates.
     */
    cursor?: SequenceTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SequenceTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SequenceTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SequenceTemplates.
     */
    distinct?: SequenceTemplateScalarFieldEnum | SequenceTemplateScalarFieldEnum[]
  }

  /**
   * SequenceTemplate findMany
   */
  export type SequenceTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceTemplate
     */
    select?: SequenceTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SequenceTemplate
     */
    omit?: SequenceTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceTemplateInclude<ExtArgs> | null
    /**
     * Filter, which SequenceTemplates to fetch.
     */
    where?: SequenceTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SequenceTemplates to fetch.
     */
    orderBy?: SequenceTemplateOrderByWithRelationInput | SequenceTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SequenceTemplates.
     */
    cursor?: SequenceTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SequenceTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SequenceTemplates.
     */
    skip?: number
    distinct?: SequenceTemplateScalarFieldEnum | SequenceTemplateScalarFieldEnum[]
  }

  /**
   * SequenceTemplate create
   */
  export type SequenceTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceTemplate
     */
    select?: SequenceTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SequenceTemplate
     */
    omit?: SequenceTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceTemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a SequenceTemplate.
     */
    data: XOR<SequenceTemplateCreateInput, SequenceTemplateUncheckedCreateInput>
  }

  /**
   * SequenceTemplate createMany
   */
  export type SequenceTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SequenceTemplates.
     */
    data: SequenceTemplateCreateManyInput | SequenceTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SequenceTemplate createManyAndReturn
   */
  export type SequenceTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceTemplate
     */
    select?: SequenceTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SequenceTemplate
     */
    omit?: SequenceTemplateOmit<ExtArgs> | null
    /**
     * The data used to create many SequenceTemplates.
     */
    data: SequenceTemplateCreateManyInput | SequenceTemplateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceTemplateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SequenceTemplate update
   */
  export type SequenceTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceTemplate
     */
    select?: SequenceTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SequenceTemplate
     */
    omit?: SequenceTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceTemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a SequenceTemplate.
     */
    data: XOR<SequenceTemplateUpdateInput, SequenceTemplateUncheckedUpdateInput>
    /**
     * Choose, which SequenceTemplate to update.
     */
    where: SequenceTemplateWhereUniqueInput
  }

  /**
   * SequenceTemplate updateMany
   */
  export type SequenceTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SequenceTemplates.
     */
    data: XOR<SequenceTemplateUpdateManyMutationInput, SequenceTemplateUncheckedUpdateManyInput>
    /**
     * Filter which SequenceTemplates to update
     */
    where?: SequenceTemplateWhereInput
    /**
     * Limit how many SequenceTemplates to update.
     */
    limit?: number
  }

  /**
   * SequenceTemplate updateManyAndReturn
   */
  export type SequenceTemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceTemplate
     */
    select?: SequenceTemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SequenceTemplate
     */
    omit?: SequenceTemplateOmit<ExtArgs> | null
    /**
     * The data used to update SequenceTemplates.
     */
    data: XOR<SequenceTemplateUpdateManyMutationInput, SequenceTemplateUncheckedUpdateManyInput>
    /**
     * Filter which SequenceTemplates to update
     */
    where?: SequenceTemplateWhereInput
    /**
     * Limit how many SequenceTemplates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceTemplateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SequenceTemplate upsert
   */
  export type SequenceTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceTemplate
     */
    select?: SequenceTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SequenceTemplate
     */
    omit?: SequenceTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceTemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the SequenceTemplate to update in case it exists.
     */
    where: SequenceTemplateWhereUniqueInput
    /**
     * In case the SequenceTemplate found by the `where` argument doesn't exist, create a new SequenceTemplate with this data.
     */
    create: XOR<SequenceTemplateCreateInput, SequenceTemplateUncheckedCreateInput>
    /**
     * In case the SequenceTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SequenceTemplateUpdateInput, SequenceTemplateUncheckedUpdateInput>
  }

  /**
   * SequenceTemplate delete
   */
  export type SequenceTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceTemplate
     */
    select?: SequenceTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SequenceTemplate
     */
    omit?: SequenceTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceTemplateInclude<ExtArgs> | null
    /**
     * Filter which SequenceTemplate to delete.
     */
    where: SequenceTemplateWhereUniqueInput
  }

  /**
   * SequenceTemplate deleteMany
   */
  export type SequenceTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SequenceTemplates to delete
     */
    where?: SequenceTemplateWhereInput
    /**
     * Limit how many SequenceTemplates to delete.
     */
    limit?: number
  }

  /**
   * SequenceTemplate.steps
   */
  export type SequenceTemplate$stepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceStep
     */
    select?: SequenceStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SequenceStep
     */
    omit?: SequenceStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceStepInclude<ExtArgs> | null
    where?: SequenceStepWhereInput
    orderBy?: SequenceStepOrderByWithRelationInput | SequenceStepOrderByWithRelationInput[]
    cursor?: SequenceStepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SequenceStepScalarFieldEnum | SequenceStepScalarFieldEnum[]
  }

  /**
   * SequenceTemplate.sequences
   */
  export type SequenceTemplate$sequencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sequence
     */
    select?: SequenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sequence
     */
    omit?: SequenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceInclude<ExtArgs> | null
    where?: SequenceWhereInput
    orderBy?: SequenceOrderByWithRelationInput | SequenceOrderByWithRelationInput[]
    cursor?: SequenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SequenceScalarFieldEnum | SequenceScalarFieldEnum[]
  }

  /**
   * SequenceTemplate without action
   */
  export type SequenceTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceTemplate
     */
    select?: SequenceTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SequenceTemplate
     */
    omit?: SequenceTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceTemplateInclude<ExtArgs> | null
  }


  /**
   * Model SequenceStep
   */

  export type AggregateSequenceStep = {
    _count: SequenceStepCountAggregateOutputType | null
    _avg: SequenceStepAvgAggregateOutputType | null
    _sum: SequenceStepSumAggregateOutputType | null
    _min: SequenceStepMinAggregateOutputType | null
    _max: SequenceStepMaxAggregateOutputType | null
  }

  export type SequenceStepAvgAggregateOutputType = {
    order: number | null
    delayMinutes: number | null
  }

  export type SequenceStepSumAggregateOutputType = {
    order: number | null
    delayMinutes: number | null
  }

  export type SequenceStepMinAggregateOutputType = {
    id: string | null
    sequenceTemplateId: string | null
    order: number | null
    delayMinutes: number | null
    channel: string | null
    templateId: string | null
  }

  export type SequenceStepMaxAggregateOutputType = {
    id: string | null
    sequenceTemplateId: string | null
    order: number | null
    delayMinutes: number | null
    channel: string | null
    templateId: string | null
  }

  export type SequenceStepCountAggregateOutputType = {
    id: number
    sequenceTemplateId: number
    order: number
    delayMinutes: number
    channel: number
    templateId: number
    _all: number
  }


  export type SequenceStepAvgAggregateInputType = {
    order?: true
    delayMinutes?: true
  }

  export type SequenceStepSumAggregateInputType = {
    order?: true
    delayMinutes?: true
  }

  export type SequenceStepMinAggregateInputType = {
    id?: true
    sequenceTemplateId?: true
    order?: true
    delayMinutes?: true
    channel?: true
    templateId?: true
  }

  export type SequenceStepMaxAggregateInputType = {
    id?: true
    sequenceTemplateId?: true
    order?: true
    delayMinutes?: true
    channel?: true
    templateId?: true
  }

  export type SequenceStepCountAggregateInputType = {
    id?: true
    sequenceTemplateId?: true
    order?: true
    delayMinutes?: true
    channel?: true
    templateId?: true
    _all?: true
  }

  export type SequenceStepAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SequenceStep to aggregate.
     */
    where?: SequenceStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SequenceSteps to fetch.
     */
    orderBy?: SequenceStepOrderByWithRelationInput | SequenceStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SequenceStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SequenceSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SequenceSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SequenceSteps
    **/
    _count?: true | SequenceStepCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SequenceStepAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SequenceStepSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SequenceStepMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SequenceStepMaxAggregateInputType
  }

  export type GetSequenceStepAggregateType<T extends SequenceStepAggregateArgs> = {
        [P in keyof T & keyof AggregateSequenceStep]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSequenceStep[P]>
      : GetScalarType<T[P], AggregateSequenceStep[P]>
  }




  export type SequenceStepGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SequenceStepWhereInput
    orderBy?: SequenceStepOrderByWithAggregationInput | SequenceStepOrderByWithAggregationInput[]
    by: SequenceStepScalarFieldEnum[] | SequenceStepScalarFieldEnum
    having?: SequenceStepScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SequenceStepCountAggregateInputType | true
    _avg?: SequenceStepAvgAggregateInputType
    _sum?: SequenceStepSumAggregateInputType
    _min?: SequenceStepMinAggregateInputType
    _max?: SequenceStepMaxAggregateInputType
  }

  export type SequenceStepGroupByOutputType = {
    id: string
    sequenceTemplateId: string
    order: number
    delayMinutes: number
    channel: string
    templateId: string
    _count: SequenceStepCountAggregateOutputType | null
    _avg: SequenceStepAvgAggregateOutputType | null
    _sum: SequenceStepSumAggregateOutputType | null
    _min: SequenceStepMinAggregateOutputType | null
    _max: SequenceStepMaxAggregateOutputType | null
  }

  type GetSequenceStepGroupByPayload<T extends SequenceStepGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SequenceStepGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SequenceStepGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SequenceStepGroupByOutputType[P]>
            : GetScalarType<T[P], SequenceStepGroupByOutputType[P]>
        }
      >
    >


  export type SequenceStepSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sequenceTemplateId?: boolean
    order?: boolean
    delayMinutes?: boolean
    channel?: boolean
    templateId?: boolean
    sequenceTemplate?: boolean | SequenceTemplateDefaultArgs<ExtArgs>
    template?: boolean | TemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sequenceStep"]>

  export type SequenceStepSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sequenceTemplateId?: boolean
    order?: boolean
    delayMinutes?: boolean
    channel?: boolean
    templateId?: boolean
    sequenceTemplate?: boolean | SequenceTemplateDefaultArgs<ExtArgs>
    template?: boolean | TemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sequenceStep"]>

  export type SequenceStepSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sequenceTemplateId?: boolean
    order?: boolean
    delayMinutes?: boolean
    channel?: boolean
    templateId?: boolean
    sequenceTemplate?: boolean | SequenceTemplateDefaultArgs<ExtArgs>
    template?: boolean | TemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sequenceStep"]>

  export type SequenceStepSelectScalar = {
    id?: boolean
    sequenceTemplateId?: boolean
    order?: boolean
    delayMinutes?: boolean
    channel?: boolean
    templateId?: boolean
  }

  export type SequenceStepOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sequenceTemplateId" | "order" | "delayMinutes" | "channel" | "templateId", ExtArgs["result"]["sequenceStep"]>
  export type SequenceStepInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sequenceTemplate?: boolean | SequenceTemplateDefaultArgs<ExtArgs>
    template?: boolean | TemplateDefaultArgs<ExtArgs>
  }
  export type SequenceStepIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sequenceTemplate?: boolean | SequenceTemplateDefaultArgs<ExtArgs>
    template?: boolean | TemplateDefaultArgs<ExtArgs>
  }
  export type SequenceStepIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sequenceTemplate?: boolean | SequenceTemplateDefaultArgs<ExtArgs>
    template?: boolean | TemplateDefaultArgs<ExtArgs>
  }

  export type $SequenceStepPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SequenceStep"
    objects: {
      sequenceTemplate: Prisma.$SequenceTemplatePayload<ExtArgs>
      template: Prisma.$TemplatePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sequenceTemplateId: string
      order: number
      delayMinutes: number
      channel: string
      templateId: string
    }, ExtArgs["result"]["sequenceStep"]>
    composites: {}
  }

  type SequenceStepGetPayload<S extends boolean | null | undefined | SequenceStepDefaultArgs> = $Result.GetResult<Prisma.$SequenceStepPayload, S>

  type SequenceStepCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SequenceStepFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SequenceStepCountAggregateInputType | true
    }

  export interface SequenceStepDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SequenceStep'], meta: { name: 'SequenceStep' } }
    /**
     * Find zero or one SequenceStep that matches the filter.
     * @param {SequenceStepFindUniqueArgs} args - Arguments to find a SequenceStep
     * @example
     * // Get one SequenceStep
     * const sequenceStep = await prisma.sequenceStep.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SequenceStepFindUniqueArgs>(args: SelectSubset<T, SequenceStepFindUniqueArgs<ExtArgs>>): Prisma__SequenceStepClient<$Result.GetResult<Prisma.$SequenceStepPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SequenceStep that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SequenceStepFindUniqueOrThrowArgs} args - Arguments to find a SequenceStep
     * @example
     * // Get one SequenceStep
     * const sequenceStep = await prisma.sequenceStep.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SequenceStepFindUniqueOrThrowArgs>(args: SelectSubset<T, SequenceStepFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SequenceStepClient<$Result.GetResult<Prisma.$SequenceStepPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SequenceStep that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequenceStepFindFirstArgs} args - Arguments to find a SequenceStep
     * @example
     * // Get one SequenceStep
     * const sequenceStep = await prisma.sequenceStep.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SequenceStepFindFirstArgs>(args?: SelectSubset<T, SequenceStepFindFirstArgs<ExtArgs>>): Prisma__SequenceStepClient<$Result.GetResult<Prisma.$SequenceStepPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SequenceStep that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequenceStepFindFirstOrThrowArgs} args - Arguments to find a SequenceStep
     * @example
     * // Get one SequenceStep
     * const sequenceStep = await prisma.sequenceStep.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SequenceStepFindFirstOrThrowArgs>(args?: SelectSubset<T, SequenceStepFindFirstOrThrowArgs<ExtArgs>>): Prisma__SequenceStepClient<$Result.GetResult<Prisma.$SequenceStepPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SequenceSteps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequenceStepFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SequenceSteps
     * const sequenceSteps = await prisma.sequenceStep.findMany()
     * 
     * // Get first 10 SequenceSteps
     * const sequenceSteps = await prisma.sequenceStep.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sequenceStepWithIdOnly = await prisma.sequenceStep.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SequenceStepFindManyArgs>(args?: SelectSubset<T, SequenceStepFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SequenceStepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SequenceStep.
     * @param {SequenceStepCreateArgs} args - Arguments to create a SequenceStep.
     * @example
     * // Create one SequenceStep
     * const SequenceStep = await prisma.sequenceStep.create({
     *   data: {
     *     // ... data to create a SequenceStep
     *   }
     * })
     * 
     */
    create<T extends SequenceStepCreateArgs>(args: SelectSubset<T, SequenceStepCreateArgs<ExtArgs>>): Prisma__SequenceStepClient<$Result.GetResult<Prisma.$SequenceStepPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SequenceSteps.
     * @param {SequenceStepCreateManyArgs} args - Arguments to create many SequenceSteps.
     * @example
     * // Create many SequenceSteps
     * const sequenceStep = await prisma.sequenceStep.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SequenceStepCreateManyArgs>(args?: SelectSubset<T, SequenceStepCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SequenceSteps and returns the data saved in the database.
     * @param {SequenceStepCreateManyAndReturnArgs} args - Arguments to create many SequenceSteps.
     * @example
     * // Create many SequenceSteps
     * const sequenceStep = await prisma.sequenceStep.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SequenceSteps and only return the `id`
     * const sequenceStepWithIdOnly = await prisma.sequenceStep.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SequenceStepCreateManyAndReturnArgs>(args?: SelectSubset<T, SequenceStepCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SequenceStepPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SequenceStep.
     * @param {SequenceStepDeleteArgs} args - Arguments to delete one SequenceStep.
     * @example
     * // Delete one SequenceStep
     * const SequenceStep = await prisma.sequenceStep.delete({
     *   where: {
     *     // ... filter to delete one SequenceStep
     *   }
     * })
     * 
     */
    delete<T extends SequenceStepDeleteArgs>(args: SelectSubset<T, SequenceStepDeleteArgs<ExtArgs>>): Prisma__SequenceStepClient<$Result.GetResult<Prisma.$SequenceStepPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SequenceStep.
     * @param {SequenceStepUpdateArgs} args - Arguments to update one SequenceStep.
     * @example
     * // Update one SequenceStep
     * const sequenceStep = await prisma.sequenceStep.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SequenceStepUpdateArgs>(args: SelectSubset<T, SequenceStepUpdateArgs<ExtArgs>>): Prisma__SequenceStepClient<$Result.GetResult<Prisma.$SequenceStepPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SequenceSteps.
     * @param {SequenceStepDeleteManyArgs} args - Arguments to filter SequenceSteps to delete.
     * @example
     * // Delete a few SequenceSteps
     * const { count } = await prisma.sequenceStep.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SequenceStepDeleteManyArgs>(args?: SelectSubset<T, SequenceStepDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SequenceSteps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequenceStepUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SequenceSteps
     * const sequenceStep = await prisma.sequenceStep.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SequenceStepUpdateManyArgs>(args: SelectSubset<T, SequenceStepUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SequenceSteps and returns the data updated in the database.
     * @param {SequenceStepUpdateManyAndReturnArgs} args - Arguments to update many SequenceSteps.
     * @example
     * // Update many SequenceSteps
     * const sequenceStep = await prisma.sequenceStep.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SequenceSteps and only return the `id`
     * const sequenceStepWithIdOnly = await prisma.sequenceStep.updateManyAndReturn({
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
    updateManyAndReturn<T extends SequenceStepUpdateManyAndReturnArgs>(args: SelectSubset<T, SequenceStepUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SequenceStepPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SequenceStep.
     * @param {SequenceStepUpsertArgs} args - Arguments to update or create a SequenceStep.
     * @example
     * // Update or create a SequenceStep
     * const sequenceStep = await prisma.sequenceStep.upsert({
     *   create: {
     *     // ... data to create a SequenceStep
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SequenceStep we want to update
     *   }
     * })
     */
    upsert<T extends SequenceStepUpsertArgs>(args: SelectSubset<T, SequenceStepUpsertArgs<ExtArgs>>): Prisma__SequenceStepClient<$Result.GetResult<Prisma.$SequenceStepPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SequenceSteps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequenceStepCountArgs} args - Arguments to filter SequenceSteps to count.
     * @example
     * // Count the number of SequenceSteps
     * const count = await prisma.sequenceStep.count({
     *   where: {
     *     // ... the filter for the SequenceSteps we want to count
     *   }
     * })
    **/
    count<T extends SequenceStepCountArgs>(
      args?: Subset<T, SequenceStepCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SequenceStepCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SequenceStep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequenceStepAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SequenceStepAggregateArgs>(args: Subset<T, SequenceStepAggregateArgs>): Prisma.PrismaPromise<GetSequenceStepAggregateType<T>>

    /**
     * Group by SequenceStep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequenceStepGroupByArgs} args - Group by arguments.
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
      T extends SequenceStepGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SequenceStepGroupByArgs['orderBy'] }
        : { orderBy?: SequenceStepGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SequenceStepGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSequenceStepGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SequenceStep model
   */
  readonly fields: SequenceStepFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SequenceStep.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SequenceStepClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sequenceTemplate<T extends SequenceTemplateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SequenceTemplateDefaultArgs<ExtArgs>>): Prisma__SequenceTemplateClient<$Result.GetResult<Prisma.$SequenceTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    template<T extends TemplateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TemplateDefaultArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SequenceStep model
   */
  interface SequenceStepFieldRefs {
    readonly id: FieldRef<"SequenceStep", 'String'>
    readonly sequenceTemplateId: FieldRef<"SequenceStep", 'String'>
    readonly order: FieldRef<"SequenceStep", 'Int'>
    readonly delayMinutes: FieldRef<"SequenceStep", 'Int'>
    readonly channel: FieldRef<"SequenceStep", 'String'>
    readonly templateId: FieldRef<"SequenceStep", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SequenceStep findUnique
   */
  export type SequenceStepFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceStep
     */
    select?: SequenceStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SequenceStep
     */
    omit?: SequenceStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceStepInclude<ExtArgs> | null
    /**
     * Filter, which SequenceStep to fetch.
     */
    where: SequenceStepWhereUniqueInput
  }

  /**
   * SequenceStep findUniqueOrThrow
   */
  export type SequenceStepFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceStep
     */
    select?: SequenceStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SequenceStep
     */
    omit?: SequenceStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceStepInclude<ExtArgs> | null
    /**
     * Filter, which SequenceStep to fetch.
     */
    where: SequenceStepWhereUniqueInput
  }

  /**
   * SequenceStep findFirst
   */
  export type SequenceStepFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceStep
     */
    select?: SequenceStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SequenceStep
     */
    omit?: SequenceStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceStepInclude<ExtArgs> | null
    /**
     * Filter, which SequenceStep to fetch.
     */
    where?: SequenceStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SequenceSteps to fetch.
     */
    orderBy?: SequenceStepOrderByWithRelationInput | SequenceStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SequenceSteps.
     */
    cursor?: SequenceStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SequenceSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SequenceSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SequenceSteps.
     */
    distinct?: SequenceStepScalarFieldEnum | SequenceStepScalarFieldEnum[]
  }

  /**
   * SequenceStep findFirstOrThrow
   */
  export type SequenceStepFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceStep
     */
    select?: SequenceStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SequenceStep
     */
    omit?: SequenceStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceStepInclude<ExtArgs> | null
    /**
     * Filter, which SequenceStep to fetch.
     */
    where?: SequenceStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SequenceSteps to fetch.
     */
    orderBy?: SequenceStepOrderByWithRelationInput | SequenceStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SequenceSteps.
     */
    cursor?: SequenceStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SequenceSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SequenceSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SequenceSteps.
     */
    distinct?: SequenceStepScalarFieldEnum | SequenceStepScalarFieldEnum[]
  }

  /**
   * SequenceStep findMany
   */
  export type SequenceStepFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceStep
     */
    select?: SequenceStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SequenceStep
     */
    omit?: SequenceStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceStepInclude<ExtArgs> | null
    /**
     * Filter, which SequenceSteps to fetch.
     */
    where?: SequenceStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SequenceSteps to fetch.
     */
    orderBy?: SequenceStepOrderByWithRelationInput | SequenceStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SequenceSteps.
     */
    cursor?: SequenceStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SequenceSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SequenceSteps.
     */
    skip?: number
    distinct?: SequenceStepScalarFieldEnum | SequenceStepScalarFieldEnum[]
  }

  /**
   * SequenceStep create
   */
  export type SequenceStepCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceStep
     */
    select?: SequenceStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SequenceStep
     */
    omit?: SequenceStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceStepInclude<ExtArgs> | null
    /**
     * The data needed to create a SequenceStep.
     */
    data: XOR<SequenceStepCreateInput, SequenceStepUncheckedCreateInput>
  }

  /**
   * SequenceStep createMany
   */
  export type SequenceStepCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SequenceSteps.
     */
    data: SequenceStepCreateManyInput | SequenceStepCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SequenceStep createManyAndReturn
   */
  export type SequenceStepCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceStep
     */
    select?: SequenceStepSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SequenceStep
     */
    omit?: SequenceStepOmit<ExtArgs> | null
    /**
     * The data used to create many SequenceSteps.
     */
    data: SequenceStepCreateManyInput | SequenceStepCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceStepIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SequenceStep update
   */
  export type SequenceStepUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceStep
     */
    select?: SequenceStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SequenceStep
     */
    omit?: SequenceStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceStepInclude<ExtArgs> | null
    /**
     * The data needed to update a SequenceStep.
     */
    data: XOR<SequenceStepUpdateInput, SequenceStepUncheckedUpdateInput>
    /**
     * Choose, which SequenceStep to update.
     */
    where: SequenceStepWhereUniqueInput
  }

  /**
   * SequenceStep updateMany
   */
  export type SequenceStepUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SequenceSteps.
     */
    data: XOR<SequenceStepUpdateManyMutationInput, SequenceStepUncheckedUpdateManyInput>
    /**
     * Filter which SequenceSteps to update
     */
    where?: SequenceStepWhereInput
    /**
     * Limit how many SequenceSteps to update.
     */
    limit?: number
  }

  /**
   * SequenceStep updateManyAndReturn
   */
  export type SequenceStepUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceStep
     */
    select?: SequenceStepSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SequenceStep
     */
    omit?: SequenceStepOmit<ExtArgs> | null
    /**
     * The data used to update SequenceSteps.
     */
    data: XOR<SequenceStepUpdateManyMutationInput, SequenceStepUncheckedUpdateManyInput>
    /**
     * Filter which SequenceSteps to update
     */
    where?: SequenceStepWhereInput
    /**
     * Limit how many SequenceSteps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceStepIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SequenceStep upsert
   */
  export type SequenceStepUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceStep
     */
    select?: SequenceStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SequenceStep
     */
    omit?: SequenceStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceStepInclude<ExtArgs> | null
    /**
     * The filter to search for the SequenceStep to update in case it exists.
     */
    where: SequenceStepWhereUniqueInput
    /**
     * In case the SequenceStep found by the `where` argument doesn't exist, create a new SequenceStep with this data.
     */
    create: XOR<SequenceStepCreateInput, SequenceStepUncheckedCreateInput>
    /**
     * In case the SequenceStep was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SequenceStepUpdateInput, SequenceStepUncheckedUpdateInput>
  }

  /**
   * SequenceStep delete
   */
  export type SequenceStepDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceStep
     */
    select?: SequenceStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SequenceStep
     */
    omit?: SequenceStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceStepInclude<ExtArgs> | null
    /**
     * Filter which SequenceStep to delete.
     */
    where: SequenceStepWhereUniqueInput
  }

  /**
   * SequenceStep deleteMany
   */
  export type SequenceStepDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SequenceSteps to delete
     */
    where?: SequenceStepWhereInput
    /**
     * Limit how many SequenceSteps to delete.
     */
    limit?: number
  }

  /**
   * SequenceStep without action
   */
  export type SequenceStepDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceStep
     */
    select?: SequenceStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SequenceStep
     */
    omit?: SequenceStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceStepInclude<ExtArgs> | null
  }


  /**
   * Model Sequence
   */

  export type AggregateSequence = {
    _count: SequenceCountAggregateOutputType | null
    _min: SequenceMinAggregateOutputType | null
    _max: SequenceMaxAggregateOutputType | null
  }

  export type SequenceMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    sequenceTemplateId: string | null
    startAt: Date | null
    cancelledAt: Date | null
  }

  export type SequenceMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    sequenceTemplateId: string | null
    startAt: Date | null
    cancelledAt: Date | null
  }

  export type SequenceCountAggregateOutputType = {
    id: number
    accountId: number
    sequenceTemplateId: number
    startAt: number
    cancelledAt: number
    _all: number
  }


  export type SequenceMinAggregateInputType = {
    id?: true
    accountId?: true
    sequenceTemplateId?: true
    startAt?: true
    cancelledAt?: true
  }

  export type SequenceMaxAggregateInputType = {
    id?: true
    accountId?: true
    sequenceTemplateId?: true
    startAt?: true
    cancelledAt?: true
  }

  export type SequenceCountAggregateInputType = {
    id?: true
    accountId?: true
    sequenceTemplateId?: true
    startAt?: true
    cancelledAt?: true
    _all?: true
  }

  export type SequenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sequence to aggregate.
     */
    where?: SequenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sequences to fetch.
     */
    orderBy?: SequenceOrderByWithRelationInput | SequenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SequenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sequences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sequences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sequences
    **/
    _count?: true | SequenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SequenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SequenceMaxAggregateInputType
  }

  export type GetSequenceAggregateType<T extends SequenceAggregateArgs> = {
        [P in keyof T & keyof AggregateSequence]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSequence[P]>
      : GetScalarType<T[P], AggregateSequence[P]>
  }




  export type SequenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SequenceWhereInput
    orderBy?: SequenceOrderByWithAggregationInput | SequenceOrderByWithAggregationInput[]
    by: SequenceScalarFieldEnum[] | SequenceScalarFieldEnum
    having?: SequenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SequenceCountAggregateInputType | true
    _min?: SequenceMinAggregateInputType
    _max?: SequenceMaxAggregateInputType
  }

  export type SequenceGroupByOutputType = {
    id: string
    accountId: string
    sequenceTemplateId: string
    startAt: Date
    cancelledAt: Date | null
    _count: SequenceCountAggregateOutputType | null
    _min: SequenceMinAggregateOutputType | null
    _max: SequenceMaxAggregateOutputType | null
  }

  type GetSequenceGroupByPayload<T extends SequenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SequenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SequenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SequenceGroupByOutputType[P]>
            : GetScalarType<T[P], SequenceGroupByOutputType[P]>
        }
      >
    >


  export type SequenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    sequenceTemplateId?: boolean
    startAt?: boolean
    cancelledAt?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
    sequenceTemplate?: boolean | SequenceTemplateDefaultArgs<ExtArgs>
    reminders?: boolean | Sequence$remindersArgs<ExtArgs>
    _count?: boolean | SequenceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sequence"]>

  export type SequenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    sequenceTemplateId?: boolean
    startAt?: boolean
    cancelledAt?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
    sequenceTemplate?: boolean | SequenceTemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sequence"]>

  export type SequenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    sequenceTemplateId?: boolean
    startAt?: boolean
    cancelledAt?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
    sequenceTemplate?: boolean | SequenceTemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sequence"]>

  export type SequenceSelectScalar = {
    id?: boolean
    accountId?: boolean
    sequenceTemplateId?: boolean
    startAt?: boolean
    cancelledAt?: boolean
  }

  export type SequenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "sequenceTemplateId" | "startAt" | "cancelledAt", ExtArgs["result"]["sequence"]>
  export type SequenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
    sequenceTemplate?: boolean | SequenceTemplateDefaultArgs<ExtArgs>
    reminders?: boolean | Sequence$remindersArgs<ExtArgs>
    _count?: boolean | SequenceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SequenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
    sequenceTemplate?: boolean | SequenceTemplateDefaultArgs<ExtArgs>
  }
  export type SequenceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
    sequenceTemplate?: boolean | SequenceTemplateDefaultArgs<ExtArgs>
  }

  export type $SequencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sequence"
    objects: {
      account: Prisma.$AccountPayload<ExtArgs>
      sequenceTemplate: Prisma.$SequenceTemplatePayload<ExtArgs>
      reminders: Prisma.$ReminderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      sequenceTemplateId: string
      startAt: Date
      cancelledAt: Date | null
    }, ExtArgs["result"]["sequence"]>
    composites: {}
  }

  type SequenceGetPayload<S extends boolean | null | undefined | SequenceDefaultArgs> = $Result.GetResult<Prisma.$SequencePayload, S>

  type SequenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SequenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SequenceCountAggregateInputType | true
    }

  export interface SequenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sequence'], meta: { name: 'Sequence' } }
    /**
     * Find zero or one Sequence that matches the filter.
     * @param {SequenceFindUniqueArgs} args - Arguments to find a Sequence
     * @example
     * // Get one Sequence
     * const sequence = await prisma.sequence.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SequenceFindUniqueArgs>(args: SelectSubset<T, SequenceFindUniqueArgs<ExtArgs>>): Prisma__SequenceClient<$Result.GetResult<Prisma.$SequencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sequence that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SequenceFindUniqueOrThrowArgs} args - Arguments to find a Sequence
     * @example
     * // Get one Sequence
     * const sequence = await prisma.sequence.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SequenceFindUniqueOrThrowArgs>(args: SelectSubset<T, SequenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SequenceClient<$Result.GetResult<Prisma.$SequencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sequence that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequenceFindFirstArgs} args - Arguments to find a Sequence
     * @example
     * // Get one Sequence
     * const sequence = await prisma.sequence.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SequenceFindFirstArgs>(args?: SelectSubset<T, SequenceFindFirstArgs<ExtArgs>>): Prisma__SequenceClient<$Result.GetResult<Prisma.$SequencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sequence that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequenceFindFirstOrThrowArgs} args - Arguments to find a Sequence
     * @example
     * // Get one Sequence
     * const sequence = await prisma.sequence.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SequenceFindFirstOrThrowArgs>(args?: SelectSubset<T, SequenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__SequenceClient<$Result.GetResult<Prisma.$SequencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sequences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sequences
     * const sequences = await prisma.sequence.findMany()
     * 
     * // Get first 10 Sequences
     * const sequences = await prisma.sequence.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sequenceWithIdOnly = await prisma.sequence.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SequenceFindManyArgs>(args?: SelectSubset<T, SequenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SequencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sequence.
     * @param {SequenceCreateArgs} args - Arguments to create a Sequence.
     * @example
     * // Create one Sequence
     * const Sequence = await prisma.sequence.create({
     *   data: {
     *     // ... data to create a Sequence
     *   }
     * })
     * 
     */
    create<T extends SequenceCreateArgs>(args: SelectSubset<T, SequenceCreateArgs<ExtArgs>>): Prisma__SequenceClient<$Result.GetResult<Prisma.$SequencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sequences.
     * @param {SequenceCreateManyArgs} args - Arguments to create many Sequences.
     * @example
     * // Create many Sequences
     * const sequence = await prisma.sequence.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SequenceCreateManyArgs>(args?: SelectSubset<T, SequenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sequences and returns the data saved in the database.
     * @param {SequenceCreateManyAndReturnArgs} args - Arguments to create many Sequences.
     * @example
     * // Create many Sequences
     * const sequence = await prisma.sequence.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sequences and only return the `id`
     * const sequenceWithIdOnly = await prisma.sequence.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SequenceCreateManyAndReturnArgs>(args?: SelectSubset<T, SequenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SequencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sequence.
     * @param {SequenceDeleteArgs} args - Arguments to delete one Sequence.
     * @example
     * // Delete one Sequence
     * const Sequence = await prisma.sequence.delete({
     *   where: {
     *     // ... filter to delete one Sequence
     *   }
     * })
     * 
     */
    delete<T extends SequenceDeleteArgs>(args: SelectSubset<T, SequenceDeleteArgs<ExtArgs>>): Prisma__SequenceClient<$Result.GetResult<Prisma.$SequencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sequence.
     * @param {SequenceUpdateArgs} args - Arguments to update one Sequence.
     * @example
     * // Update one Sequence
     * const sequence = await prisma.sequence.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SequenceUpdateArgs>(args: SelectSubset<T, SequenceUpdateArgs<ExtArgs>>): Prisma__SequenceClient<$Result.GetResult<Prisma.$SequencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sequences.
     * @param {SequenceDeleteManyArgs} args - Arguments to filter Sequences to delete.
     * @example
     * // Delete a few Sequences
     * const { count } = await prisma.sequence.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SequenceDeleteManyArgs>(args?: SelectSubset<T, SequenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sequences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sequences
     * const sequence = await prisma.sequence.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SequenceUpdateManyArgs>(args: SelectSubset<T, SequenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sequences and returns the data updated in the database.
     * @param {SequenceUpdateManyAndReturnArgs} args - Arguments to update many Sequences.
     * @example
     * // Update many Sequences
     * const sequence = await prisma.sequence.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sequences and only return the `id`
     * const sequenceWithIdOnly = await prisma.sequence.updateManyAndReturn({
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
    updateManyAndReturn<T extends SequenceUpdateManyAndReturnArgs>(args: SelectSubset<T, SequenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SequencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sequence.
     * @param {SequenceUpsertArgs} args - Arguments to update or create a Sequence.
     * @example
     * // Update or create a Sequence
     * const sequence = await prisma.sequence.upsert({
     *   create: {
     *     // ... data to create a Sequence
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sequence we want to update
     *   }
     * })
     */
    upsert<T extends SequenceUpsertArgs>(args: SelectSubset<T, SequenceUpsertArgs<ExtArgs>>): Prisma__SequenceClient<$Result.GetResult<Prisma.$SequencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sequences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequenceCountArgs} args - Arguments to filter Sequences to count.
     * @example
     * // Count the number of Sequences
     * const count = await prisma.sequence.count({
     *   where: {
     *     // ... the filter for the Sequences we want to count
     *   }
     * })
    **/
    count<T extends SequenceCountArgs>(
      args?: Subset<T, SequenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SequenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sequence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SequenceAggregateArgs>(args: Subset<T, SequenceAggregateArgs>): Prisma.PrismaPromise<GetSequenceAggregateType<T>>

    /**
     * Group by Sequence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequenceGroupByArgs} args - Group by arguments.
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
      T extends SequenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SequenceGroupByArgs['orderBy'] }
        : { orderBy?: SequenceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SequenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSequenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sequence model
   */
  readonly fields: SequenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sequence.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SequenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sequenceTemplate<T extends SequenceTemplateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SequenceTemplateDefaultArgs<ExtArgs>>): Prisma__SequenceTemplateClient<$Result.GetResult<Prisma.$SequenceTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reminders<T extends Sequence$remindersArgs<ExtArgs> = {}>(args?: Subset<T, Sequence$remindersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Sequence model
   */
  interface SequenceFieldRefs {
    readonly id: FieldRef<"Sequence", 'String'>
    readonly accountId: FieldRef<"Sequence", 'String'>
    readonly sequenceTemplateId: FieldRef<"Sequence", 'String'>
    readonly startAt: FieldRef<"Sequence", 'DateTime'>
    readonly cancelledAt: FieldRef<"Sequence", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sequence findUnique
   */
  export type SequenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sequence
     */
    select?: SequenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sequence
     */
    omit?: SequenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceInclude<ExtArgs> | null
    /**
     * Filter, which Sequence to fetch.
     */
    where: SequenceWhereUniqueInput
  }

  /**
   * Sequence findUniqueOrThrow
   */
  export type SequenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sequence
     */
    select?: SequenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sequence
     */
    omit?: SequenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceInclude<ExtArgs> | null
    /**
     * Filter, which Sequence to fetch.
     */
    where: SequenceWhereUniqueInput
  }

  /**
   * Sequence findFirst
   */
  export type SequenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sequence
     */
    select?: SequenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sequence
     */
    omit?: SequenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceInclude<ExtArgs> | null
    /**
     * Filter, which Sequence to fetch.
     */
    where?: SequenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sequences to fetch.
     */
    orderBy?: SequenceOrderByWithRelationInput | SequenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sequences.
     */
    cursor?: SequenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sequences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sequences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sequences.
     */
    distinct?: SequenceScalarFieldEnum | SequenceScalarFieldEnum[]
  }

  /**
   * Sequence findFirstOrThrow
   */
  export type SequenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sequence
     */
    select?: SequenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sequence
     */
    omit?: SequenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceInclude<ExtArgs> | null
    /**
     * Filter, which Sequence to fetch.
     */
    where?: SequenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sequences to fetch.
     */
    orderBy?: SequenceOrderByWithRelationInput | SequenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sequences.
     */
    cursor?: SequenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sequences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sequences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sequences.
     */
    distinct?: SequenceScalarFieldEnum | SequenceScalarFieldEnum[]
  }

  /**
   * Sequence findMany
   */
  export type SequenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sequence
     */
    select?: SequenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sequence
     */
    omit?: SequenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceInclude<ExtArgs> | null
    /**
     * Filter, which Sequences to fetch.
     */
    where?: SequenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sequences to fetch.
     */
    orderBy?: SequenceOrderByWithRelationInput | SequenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sequences.
     */
    cursor?: SequenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sequences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sequences.
     */
    skip?: number
    distinct?: SequenceScalarFieldEnum | SequenceScalarFieldEnum[]
  }

  /**
   * Sequence create
   */
  export type SequenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sequence
     */
    select?: SequenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sequence
     */
    omit?: SequenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceInclude<ExtArgs> | null
    /**
     * The data needed to create a Sequence.
     */
    data: XOR<SequenceCreateInput, SequenceUncheckedCreateInput>
  }

  /**
   * Sequence createMany
   */
  export type SequenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sequences.
     */
    data: SequenceCreateManyInput | SequenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sequence createManyAndReturn
   */
  export type SequenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sequence
     */
    select?: SequenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sequence
     */
    omit?: SequenceOmit<ExtArgs> | null
    /**
     * The data used to create many Sequences.
     */
    data: SequenceCreateManyInput | SequenceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sequence update
   */
  export type SequenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sequence
     */
    select?: SequenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sequence
     */
    omit?: SequenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceInclude<ExtArgs> | null
    /**
     * The data needed to update a Sequence.
     */
    data: XOR<SequenceUpdateInput, SequenceUncheckedUpdateInput>
    /**
     * Choose, which Sequence to update.
     */
    where: SequenceWhereUniqueInput
  }

  /**
   * Sequence updateMany
   */
  export type SequenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sequences.
     */
    data: XOR<SequenceUpdateManyMutationInput, SequenceUncheckedUpdateManyInput>
    /**
     * Filter which Sequences to update
     */
    where?: SequenceWhereInput
    /**
     * Limit how many Sequences to update.
     */
    limit?: number
  }

  /**
   * Sequence updateManyAndReturn
   */
  export type SequenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sequence
     */
    select?: SequenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sequence
     */
    omit?: SequenceOmit<ExtArgs> | null
    /**
     * The data used to update Sequences.
     */
    data: XOR<SequenceUpdateManyMutationInput, SequenceUncheckedUpdateManyInput>
    /**
     * Filter which Sequences to update
     */
    where?: SequenceWhereInput
    /**
     * Limit how many Sequences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sequence upsert
   */
  export type SequenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sequence
     */
    select?: SequenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sequence
     */
    omit?: SequenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceInclude<ExtArgs> | null
    /**
     * The filter to search for the Sequence to update in case it exists.
     */
    where: SequenceWhereUniqueInput
    /**
     * In case the Sequence found by the `where` argument doesn't exist, create a new Sequence with this data.
     */
    create: XOR<SequenceCreateInput, SequenceUncheckedCreateInput>
    /**
     * In case the Sequence was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SequenceUpdateInput, SequenceUncheckedUpdateInput>
  }

  /**
   * Sequence delete
   */
  export type SequenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sequence
     */
    select?: SequenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sequence
     */
    omit?: SequenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceInclude<ExtArgs> | null
    /**
     * Filter which Sequence to delete.
     */
    where: SequenceWhereUniqueInput
  }

  /**
   * Sequence deleteMany
   */
  export type SequenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sequences to delete
     */
    where?: SequenceWhereInput
    /**
     * Limit how many Sequences to delete.
     */
    limit?: number
  }

  /**
   * Sequence.reminders
   */
  export type Sequence$remindersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    where?: ReminderWhereInput
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    cursor?: ReminderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
  }

  /**
   * Sequence without action
   */
  export type SequenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sequence
     */
    select?: SequenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sequence
     */
    omit?: SequenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceInclude<ExtArgs> | null
  }


  /**
   * Model Reminder
   */

  export type AggregateReminder = {
    _count: ReminderCountAggregateOutputType | null
    _min: ReminderMinAggregateOutputType | null
    _max: ReminderMaxAggregateOutputType | null
  }

  export type ReminderMinAggregateOutputType = {
    id: string | null
    sequenceId: string | null
    customerId: string | null
    accountId: string | null
    templateId: string | null
    channel: string | null
    sendAt: Date | null
    sentAt: Date | null
    status: string | null
    jobId: string | null
  }

  export type ReminderMaxAggregateOutputType = {
    id: string | null
    sequenceId: string | null
    customerId: string | null
    accountId: string | null
    templateId: string | null
    channel: string | null
    sendAt: Date | null
    sentAt: Date | null
    status: string | null
    jobId: string | null
  }

  export type ReminderCountAggregateOutputType = {
    id: number
    sequenceId: number
    customerId: number
    accountId: number
    templateId: number
    channel: number
    sendAt: number
    sentAt: number
    status: number
    jobId: number
    _all: number
  }


  export type ReminderMinAggregateInputType = {
    id?: true
    sequenceId?: true
    customerId?: true
    accountId?: true
    templateId?: true
    channel?: true
    sendAt?: true
    sentAt?: true
    status?: true
    jobId?: true
  }

  export type ReminderMaxAggregateInputType = {
    id?: true
    sequenceId?: true
    customerId?: true
    accountId?: true
    templateId?: true
    channel?: true
    sendAt?: true
    sentAt?: true
    status?: true
    jobId?: true
  }

  export type ReminderCountAggregateInputType = {
    id?: true
    sequenceId?: true
    customerId?: true
    accountId?: true
    templateId?: true
    channel?: true
    sendAt?: true
    sentAt?: true
    status?: true
    jobId?: true
    _all?: true
  }

  export type ReminderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reminder to aggregate.
     */
    where?: ReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reminders
    **/
    _count?: true | ReminderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReminderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReminderMaxAggregateInputType
  }

  export type GetReminderAggregateType<T extends ReminderAggregateArgs> = {
        [P in keyof T & keyof AggregateReminder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReminder[P]>
      : GetScalarType<T[P], AggregateReminder[P]>
  }




  export type ReminderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReminderWhereInput
    orderBy?: ReminderOrderByWithAggregationInput | ReminderOrderByWithAggregationInput[]
    by: ReminderScalarFieldEnum[] | ReminderScalarFieldEnum
    having?: ReminderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReminderCountAggregateInputType | true
    _min?: ReminderMinAggregateInputType
    _max?: ReminderMaxAggregateInputType
  }

  export type ReminderGroupByOutputType = {
    id: string
    sequenceId: string
    customerId: string
    accountId: string
    templateId: string
    channel: string
    sendAt: Date
    sentAt: Date | null
    status: string
    jobId: string
    _count: ReminderCountAggregateOutputType | null
    _min: ReminderMinAggregateOutputType | null
    _max: ReminderMaxAggregateOutputType | null
  }

  type GetReminderGroupByPayload<T extends ReminderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReminderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReminderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReminderGroupByOutputType[P]>
            : GetScalarType<T[P], ReminderGroupByOutputType[P]>
        }
      >
    >


  export type ReminderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sequenceId?: boolean
    customerId?: boolean
    accountId?: boolean
    templateId?: boolean
    channel?: boolean
    sendAt?: boolean
    sentAt?: boolean
    status?: boolean
    jobId?: boolean
    sequence?: boolean | SequenceDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
    template?: boolean | TemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reminder"]>

  export type ReminderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sequenceId?: boolean
    customerId?: boolean
    accountId?: boolean
    templateId?: boolean
    channel?: boolean
    sendAt?: boolean
    sentAt?: boolean
    status?: boolean
    jobId?: boolean
    sequence?: boolean | SequenceDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
    template?: boolean | TemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reminder"]>

  export type ReminderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sequenceId?: boolean
    customerId?: boolean
    accountId?: boolean
    templateId?: boolean
    channel?: boolean
    sendAt?: boolean
    sentAt?: boolean
    status?: boolean
    jobId?: boolean
    sequence?: boolean | SequenceDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
    template?: boolean | TemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reminder"]>

  export type ReminderSelectScalar = {
    id?: boolean
    sequenceId?: boolean
    customerId?: boolean
    accountId?: boolean
    templateId?: boolean
    channel?: boolean
    sendAt?: boolean
    sentAt?: boolean
    status?: boolean
    jobId?: boolean
  }

  export type ReminderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sequenceId" | "customerId" | "accountId" | "templateId" | "channel" | "sendAt" | "sentAt" | "status" | "jobId", ExtArgs["result"]["reminder"]>
  export type ReminderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sequence?: boolean | SequenceDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
    template?: boolean | TemplateDefaultArgs<ExtArgs>
  }
  export type ReminderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sequence?: boolean | SequenceDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
    template?: boolean | TemplateDefaultArgs<ExtArgs>
  }
  export type ReminderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sequence?: boolean | SequenceDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
    template?: boolean | TemplateDefaultArgs<ExtArgs>
  }

  export type $ReminderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reminder"
    objects: {
      sequence: Prisma.$SequencePayload<ExtArgs>
      customer: Prisma.$CustomerPayload<ExtArgs>
      account: Prisma.$AccountPayload<ExtArgs>
      template: Prisma.$TemplatePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sequenceId: string
      customerId: string
      accountId: string
      templateId: string
      channel: string
      sendAt: Date
      sentAt: Date | null
      status: string
      jobId: string
    }, ExtArgs["result"]["reminder"]>
    composites: {}
  }

  type ReminderGetPayload<S extends boolean | null | undefined | ReminderDefaultArgs> = $Result.GetResult<Prisma.$ReminderPayload, S>

  type ReminderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReminderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReminderCountAggregateInputType | true
    }

  export interface ReminderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reminder'], meta: { name: 'Reminder' } }
    /**
     * Find zero or one Reminder that matches the filter.
     * @param {ReminderFindUniqueArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReminderFindUniqueArgs>(args: SelectSubset<T, ReminderFindUniqueArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reminder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReminderFindUniqueOrThrowArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReminderFindUniqueOrThrowArgs>(args: SelectSubset<T, ReminderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reminder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderFindFirstArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReminderFindFirstArgs>(args?: SelectSubset<T, ReminderFindFirstArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reminder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderFindFirstOrThrowArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReminderFindFirstOrThrowArgs>(args?: SelectSubset<T, ReminderFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reminders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reminders
     * const reminders = await prisma.reminder.findMany()
     * 
     * // Get first 10 Reminders
     * const reminders = await prisma.reminder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reminderWithIdOnly = await prisma.reminder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReminderFindManyArgs>(args?: SelectSubset<T, ReminderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reminder.
     * @param {ReminderCreateArgs} args - Arguments to create a Reminder.
     * @example
     * // Create one Reminder
     * const Reminder = await prisma.reminder.create({
     *   data: {
     *     // ... data to create a Reminder
     *   }
     * })
     * 
     */
    create<T extends ReminderCreateArgs>(args: SelectSubset<T, ReminderCreateArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reminders.
     * @param {ReminderCreateManyArgs} args - Arguments to create many Reminders.
     * @example
     * // Create many Reminders
     * const reminder = await prisma.reminder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReminderCreateManyArgs>(args?: SelectSubset<T, ReminderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reminders and returns the data saved in the database.
     * @param {ReminderCreateManyAndReturnArgs} args - Arguments to create many Reminders.
     * @example
     * // Create many Reminders
     * const reminder = await prisma.reminder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reminders and only return the `id`
     * const reminderWithIdOnly = await prisma.reminder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReminderCreateManyAndReturnArgs>(args?: SelectSubset<T, ReminderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reminder.
     * @param {ReminderDeleteArgs} args - Arguments to delete one Reminder.
     * @example
     * // Delete one Reminder
     * const Reminder = await prisma.reminder.delete({
     *   where: {
     *     // ... filter to delete one Reminder
     *   }
     * })
     * 
     */
    delete<T extends ReminderDeleteArgs>(args: SelectSubset<T, ReminderDeleteArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reminder.
     * @param {ReminderUpdateArgs} args - Arguments to update one Reminder.
     * @example
     * // Update one Reminder
     * const reminder = await prisma.reminder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReminderUpdateArgs>(args: SelectSubset<T, ReminderUpdateArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reminders.
     * @param {ReminderDeleteManyArgs} args - Arguments to filter Reminders to delete.
     * @example
     * // Delete a few Reminders
     * const { count } = await prisma.reminder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReminderDeleteManyArgs>(args?: SelectSubset<T, ReminderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reminders
     * const reminder = await prisma.reminder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReminderUpdateManyArgs>(args: SelectSubset<T, ReminderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reminders and returns the data updated in the database.
     * @param {ReminderUpdateManyAndReturnArgs} args - Arguments to update many Reminders.
     * @example
     * // Update many Reminders
     * const reminder = await prisma.reminder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reminders and only return the `id`
     * const reminderWithIdOnly = await prisma.reminder.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReminderUpdateManyAndReturnArgs>(args: SelectSubset<T, ReminderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reminder.
     * @param {ReminderUpsertArgs} args - Arguments to update or create a Reminder.
     * @example
     * // Update or create a Reminder
     * const reminder = await prisma.reminder.upsert({
     *   create: {
     *     // ... data to create a Reminder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reminder we want to update
     *   }
     * })
     */
    upsert<T extends ReminderUpsertArgs>(args: SelectSubset<T, ReminderUpsertArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderCountArgs} args - Arguments to filter Reminders to count.
     * @example
     * // Count the number of Reminders
     * const count = await prisma.reminder.count({
     *   where: {
     *     // ... the filter for the Reminders we want to count
     *   }
     * })
    **/
    count<T extends ReminderCountArgs>(
      args?: Subset<T, ReminderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReminderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reminder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReminderAggregateArgs>(args: Subset<T, ReminderAggregateArgs>): Prisma.PrismaPromise<GetReminderAggregateType<T>>

    /**
     * Group by Reminder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderGroupByArgs} args - Group by arguments.
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
      T extends ReminderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReminderGroupByArgs['orderBy'] }
        : { orderBy?: ReminderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReminderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReminderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reminder model
   */
  readonly fields: ReminderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reminder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReminderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sequence<T extends SequenceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SequenceDefaultArgs<ExtArgs>>): Prisma__SequenceClient<$Result.GetResult<Prisma.$SequencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    template<T extends TemplateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TemplateDefaultArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Reminder model
   */
  interface ReminderFieldRefs {
    readonly id: FieldRef<"Reminder", 'String'>
    readonly sequenceId: FieldRef<"Reminder", 'String'>
    readonly customerId: FieldRef<"Reminder", 'String'>
    readonly accountId: FieldRef<"Reminder", 'String'>
    readonly templateId: FieldRef<"Reminder", 'String'>
    readonly channel: FieldRef<"Reminder", 'String'>
    readonly sendAt: FieldRef<"Reminder", 'DateTime'>
    readonly sentAt: FieldRef<"Reminder", 'DateTime'>
    readonly status: FieldRef<"Reminder", 'String'>
    readonly jobId: FieldRef<"Reminder", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Reminder findUnique
   */
  export type ReminderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminder to fetch.
     */
    where: ReminderWhereUniqueInput
  }

  /**
   * Reminder findUniqueOrThrow
   */
  export type ReminderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminder to fetch.
     */
    where: ReminderWhereUniqueInput
  }

  /**
   * Reminder findFirst
   */
  export type ReminderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminder to fetch.
     */
    where?: ReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reminders.
     */
    cursor?: ReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reminders.
     */
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
  }

  /**
   * Reminder findFirstOrThrow
   */
  export type ReminderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminder to fetch.
     */
    where?: ReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reminders.
     */
    cursor?: ReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reminders.
     */
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
  }

  /**
   * Reminder findMany
   */
  export type ReminderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminders to fetch.
     */
    where?: ReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reminders.
     */
    cursor?: ReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
  }

  /**
   * Reminder create
   */
  export type ReminderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * The data needed to create a Reminder.
     */
    data: XOR<ReminderCreateInput, ReminderUncheckedCreateInput>
  }

  /**
   * Reminder createMany
   */
  export type ReminderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reminders.
     */
    data: ReminderCreateManyInput | ReminderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reminder createManyAndReturn
   */
  export type ReminderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * The data used to create many Reminders.
     */
    data: ReminderCreateManyInput | ReminderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reminder update
   */
  export type ReminderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * The data needed to update a Reminder.
     */
    data: XOR<ReminderUpdateInput, ReminderUncheckedUpdateInput>
    /**
     * Choose, which Reminder to update.
     */
    where: ReminderWhereUniqueInput
  }

  /**
   * Reminder updateMany
   */
  export type ReminderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reminders.
     */
    data: XOR<ReminderUpdateManyMutationInput, ReminderUncheckedUpdateManyInput>
    /**
     * Filter which Reminders to update
     */
    where?: ReminderWhereInput
    /**
     * Limit how many Reminders to update.
     */
    limit?: number
  }

  /**
   * Reminder updateManyAndReturn
   */
  export type ReminderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * The data used to update Reminders.
     */
    data: XOR<ReminderUpdateManyMutationInput, ReminderUncheckedUpdateManyInput>
    /**
     * Filter which Reminders to update
     */
    where?: ReminderWhereInput
    /**
     * Limit how many Reminders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reminder upsert
   */
  export type ReminderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * The filter to search for the Reminder to update in case it exists.
     */
    where: ReminderWhereUniqueInput
    /**
     * In case the Reminder found by the `where` argument doesn't exist, create a new Reminder with this data.
     */
    create: XOR<ReminderCreateInput, ReminderUncheckedCreateInput>
    /**
     * In case the Reminder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReminderUpdateInput, ReminderUncheckedUpdateInput>
  }

  /**
   * Reminder delete
   */
  export type ReminderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter which Reminder to delete.
     */
    where: ReminderWhereUniqueInput
  }

  /**
   * Reminder deleteMany
   */
  export type ReminderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reminders to delete
     */
    where?: ReminderWhereInput
    /**
     * Limit how many Reminders to delete.
     */
    limit?: number
  }

  /**
   * Reminder without action
   */
  export type ReminderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
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


  export const AccountScalarFieldEnum: {
    id: 'id',
    name: 'name',
    apiKey: 'apiKey',
    createdAt: 'createdAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phoneNumber: 'phoneNumber',
    externalId: 'externalId',
    createdAt: 'createdAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const TemplateScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    name: 'name',
    channel: 'channel',
    content: 'content'
  };

  export type TemplateScalarFieldEnum = (typeof TemplateScalarFieldEnum)[keyof typeof TemplateScalarFieldEnum]


  export const SequenceTemplateScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    name: 'name',
    cancelOnEvent: 'cancelOnEvent',
    createdAt: 'createdAt'
  };

  export type SequenceTemplateScalarFieldEnum = (typeof SequenceTemplateScalarFieldEnum)[keyof typeof SequenceTemplateScalarFieldEnum]


  export const SequenceStepScalarFieldEnum: {
    id: 'id',
    sequenceTemplateId: 'sequenceTemplateId',
    order: 'order',
    delayMinutes: 'delayMinutes',
    channel: 'channel',
    templateId: 'templateId'
  };

  export type SequenceStepScalarFieldEnum = (typeof SequenceStepScalarFieldEnum)[keyof typeof SequenceStepScalarFieldEnum]


  export const SequenceScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    sequenceTemplateId: 'sequenceTemplateId',
    startAt: 'startAt',
    cancelledAt: 'cancelledAt'
  };

  export type SequenceScalarFieldEnum = (typeof SequenceScalarFieldEnum)[keyof typeof SequenceScalarFieldEnum]


  export const ReminderScalarFieldEnum: {
    id: 'id',
    sequenceId: 'sequenceId',
    customerId: 'customerId',
    accountId: 'accountId',
    templateId: 'templateId',
    channel: 'channel',
    sendAt: 'sendAt',
    sentAt: 'sentAt',
    status: 'status',
    jobId: 'jobId'
  };

  export type ReminderScalarFieldEnum = (typeof ReminderScalarFieldEnum)[keyof typeof ReminderScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    name?: StringFilter<"Account"> | string
    apiKey?: StringFilter<"Account"> | string
    createdAt?: DateTimeFilter<"Account"> | Date | string
    templates?: TemplateListRelationFilter
    sequenceTemplates?: SequenceTemplateListRelationFilter
    customers?: CustomerListRelationFilter
    sequences?: SequenceListRelationFilter
    reminders?: ReminderListRelationFilter
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    apiKey?: SortOrder
    createdAt?: SortOrder
    templates?: TemplateOrderByRelationAggregateInput
    sequenceTemplates?: SequenceTemplateOrderByRelationAggregateInput
    customers?: CustomerOrderByRelationAggregateInput
    sequences?: SequenceOrderByRelationAggregateInput
    reminders?: ReminderOrderByRelationAggregateInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    name?: StringFilter<"Account"> | string
    apiKey?: StringFilter<"Account"> | string
    createdAt?: DateTimeFilter<"Account"> | Date | string
    templates?: TemplateListRelationFilter
    sequenceTemplates?: SequenceTemplateListRelationFilter
    customers?: CustomerListRelationFilter
    sequences?: SequenceListRelationFilter
    reminders?: ReminderListRelationFilter
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    apiKey?: SortOrder
    createdAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    name?: StringWithAggregatesFilter<"Account"> | string
    apiKey?: StringWithAggregatesFilter<"Account"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    accountId?: StringFilter<"Customer"> | string
    firstName?: StringFilter<"Customer"> | string
    lastName?: StringFilter<"Customer"> | string
    email?: StringFilter<"Customer"> | string
    phoneNumber?: StringFilter<"Customer"> | string
    externalId?: StringFilter<"Customer"> | string
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    reminders?: ReminderListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    externalId?: SortOrder
    createdAt?: SortOrder
    account?: AccountOrderByWithRelationInput
    reminders?: ReminderOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    accountId?: StringFilter<"Customer"> | string
    firstName?: StringFilter<"Customer"> | string
    lastName?: StringFilter<"Customer"> | string
    email?: StringFilter<"Customer"> | string
    phoneNumber?: StringFilter<"Customer"> | string
    externalId?: StringFilter<"Customer"> | string
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    reminders?: ReminderListRelationFilter
  }, "id">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    externalId?: SortOrder
    createdAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    accountId?: StringWithAggregatesFilter<"Customer"> | string
    firstName?: StringWithAggregatesFilter<"Customer"> | string
    lastName?: StringWithAggregatesFilter<"Customer"> | string
    email?: StringWithAggregatesFilter<"Customer"> | string
    phoneNumber?: StringWithAggregatesFilter<"Customer"> | string
    externalId?: StringWithAggregatesFilter<"Customer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type TemplateWhereInput = {
    AND?: TemplateWhereInput | TemplateWhereInput[]
    OR?: TemplateWhereInput[]
    NOT?: TemplateWhereInput | TemplateWhereInput[]
    id?: StringFilter<"Template"> | string
    accountId?: StringFilter<"Template"> | string
    name?: StringFilter<"Template"> | string
    channel?: StringFilter<"Template"> | string
    content?: StringFilter<"Template"> | string
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    sequenceSteps?: SequenceStepListRelationFilter
    reminders?: ReminderListRelationFilter
  }

  export type TemplateOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    name?: SortOrder
    channel?: SortOrder
    content?: SortOrder
    account?: AccountOrderByWithRelationInput
    sequenceSteps?: SequenceStepOrderByRelationAggregateInput
    reminders?: ReminderOrderByRelationAggregateInput
  }

  export type TemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TemplateWhereInput | TemplateWhereInput[]
    OR?: TemplateWhereInput[]
    NOT?: TemplateWhereInput | TemplateWhereInput[]
    accountId?: StringFilter<"Template"> | string
    name?: StringFilter<"Template"> | string
    channel?: StringFilter<"Template"> | string
    content?: StringFilter<"Template"> | string
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    sequenceSteps?: SequenceStepListRelationFilter
    reminders?: ReminderListRelationFilter
  }, "id">

  export type TemplateOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    name?: SortOrder
    channel?: SortOrder
    content?: SortOrder
    _count?: TemplateCountOrderByAggregateInput
    _max?: TemplateMaxOrderByAggregateInput
    _min?: TemplateMinOrderByAggregateInput
  }

  export type TemplateScalarWhereWithAggregatesInput = {
    AND?: TemplateScalarWhereWithAggregatesInput | TemplateScalarWhereWithAggregatesInput[]
    OR?: TemplateScalarWhereWithAggregatesInput[]
    NOT?: TemplateScalarWhereWithAggregatesInput | TemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Template"> | string
    accountId?: StringWithAggregatesFilter<"Template"> | string
    name?: StringWithAggregatesFilter<"Template"> | string
    channel?: StringWithAggregatesFilter<"Template"> | string
    content?: StringWithAggregatesFilter<"Template"> | string
  }

  export type SequenceTemplateWhereInput = {
    AND?: SequenceTemplateWhereInput | SequenceTemplateWhereInput[]
    OR?: SequenceTemplateWhereInput[]
    NOT?: SequenceTemplateWhereInput | SequenceTemplateWhereInput[]
    id?: StringFilter<"SequenceTemplate"> | string
    accountId?: StringFilter<"SequenceTemplate"> | string
    name?: StringFilter<"SequenceTemplate"> | string
    cancelOnEvent?: StringNullableFilter<"SequenceTemplate"> | string | null
    createdAt?: DateTimeFilter<"SequenceTemplate"> | Date | string
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    steps?: SequenceStepListRelationFilter
    sequences?: SequenceListRelationFilter
  }

  export type SequenceTemplateOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    name?: SortOrder
    cancelOnEvent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    account?: AccountOrderByWithRelationInput
    steps?: SequenceStepOrderByRelationAggregateInput
    sequences?: SequenceOrderByRelationAggregateInput
  }

  export type SequenceTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SequenceTemplateWhereInput | SequenceTemplateWhereInput[]
    OR?: SequenceTemplateWhereInput[]
    NOT?: SequenceTemplateWhereInput | SequenceTemplateWhereInput[]
    accountId?: StringFilter<"SequenceTemplate"> | string
    name?: StringFilter<"SequenceTemplate"> | string
    cancelOnEvent?: StringNullableFilter<"SequenceTemplate"> | string | null
    createdAt?: DateTimeFilter<"SequenceTemplate"> | Date | string
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    steps?: SequenceStepListRelationFilter
    sequences?: SequenceListRelationFilter
  }, "id">

  export type SequenceTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    name?: SortOrder
    cancelOnEvent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SequenceTemplateCountOrderByAggregateInput
    _max?: SequenceTemplateMaxOrderByAggregateInput
    _min?: SequenceTemplateMinOrderByAggregateInput
  }

  export type SequenceTemplateScalarWhereWithAggregatesInput = {
    AND?: SequenceTemplateScalarWhereWithAggregatesInput | SequenceTemplateScalarWhereWithAggregatesInput[]
    OR?: SequenceTemplateScalarWhereWithAggregatesInput[]
    NOT?: SequenceTemplateScalarWhereWithAggregatesInput | SequenceTemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SequenceTemplate"> | string
    accountId?: StringWithAggregatesFilter<"SequenceTemplate"> | string
    name?: StringWithAggregatesFilter<"SequenceTemplate"> | string
    cancelOnEvent?: StringNullableWithAggregatesFilter<"SequenceTemplate"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SequenceTemplate"> | Date | string
  }

  export type SequenceStepWhereInput = {
    AND?: SequenceStepWhereInput | SequenceStepWhereInput[]
    OR?: SequenceStepWhereInput[]
    NOT?: SequenceStepWhereInput | SequenceStepWhereInput[]
    id?: StringFilter<"SequenceStep"> | string
    sequenceTemplateId?: StringFilter<"SequenceStep"> | string
    order?: IntFilter<"SequenceStep"> | number
    delayMinutes?: IntFilter<"SequenceStep"> | number
    channel?: StringFilter<"SequenceStep"> | string
    templateId?: StringFilter<"SequenceStep"> | string
    sequenceTemplate?: XOR<SequenceTemplateScalarRelationFilter, SequenceTemplateWhereInput>
    template?: XOR<TemplateScalarRelationFilter, TemplateWhereInput>
  }

  export type SequenceStepOrderByWithRelationInput = {
    id?: SortOrder
    sequenceTemplateId?: SortOrder
    order?: SortOrder
    delayMinutes?: SortOrder
    channel?: SortOrder
    templateId?: SortOrder
    sequenceTemplate?: SequenceTemplateOrderByWithRelationInput
    template?: TemplateOrderByWithRelationInput
  }

  export type SequenceStepWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SequenceStepWhereInput | SequenceStepWhereInput[]
    OR?: SequenceStepWhereInput[]
    NOT?: SequenceStepWhereInput | SequenceStepWhereInput[]
    sequenceTemplateId?: StringFilter<"SequenceStep"> | string
    order?: IntFilter<"SequenceStep"> | number
    delayMinutes?: IntFilter<"SequenceStep"> | number
    channel?: StringFilter<"SequenceStep"> | string
    templateId?: StringFilter<"SequenceStep"> | string
    sequenceTemplate?: XOR<SequenceTemplateScalarRelationFilter, SequenceTemplateWhereInput>
    template?: XOR<TemplateScalarRelationFilter, TemplateWhereInput>
  }, "id">

  export type SequenceStepOrderByWithAggregationInput = {
    id?: SortOrder
    sequenceTemplateId?: SortOrder
    order?: SortOrder
    delayMinutes?: SortOrder
    channel?: SortOrder
    templateId?: SortOrder
    _count?: SequenceStepCountOrderByAggregateInput
    _avg?: SequenceStepAvgOrderByAggregateInput
    _max?: SequenceStepMaxOrderByAggregateInput
    _min?: SequenceStepMinOrderByAggregateInput
    _sum?: SequenceStepSumOrderByAggregateInput
  }

  export type SequenceStepScalarWhereWithAggregatesInput = {
    AND?: SequenceStepScalarWhereWithAggregatesInput | SequenceStepScalarWhereWithAggregatesInput[]
    OR?: SequenceStepScalarWhereWithAggregatesInput[]
    NOT?: SequenceStepScalarWhereWithAggregatesInput | SequenceStepScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SequenceStep"> | string
    sequenceTemplateId?: StringWithAggregatesFilter<"SequenceStep"> | string
    order?: IntWithAggregatesFilter<"SequenceStep"> | number
    delayMinutes?: IntWithAggregatesFilter<"SequenceStep"> | number
    channel?: StringWithAggregatesFilter<"SequenceStep"> | string
    templateId?: StringWithAggregatesFilter<"SequenceStep"> | string
  }

  export type SequenceWhereInput = {
    AND?: SequenceWhereInput | SequenceWhereInput[]
    OR?: SequenceWhereInput[]
    NOT?: SequenceWhereInput | SequenceWhereInput[]
    id?: StringFilter<"Sequence"> | string
    accountId?: StringFilter<"Sequence"> | string
    sequenceTemplateId?: StringFilter<"Sequence"> | string
    startAt?: DateTimeFilter<"Sequence"> | Date | string
    cancelledAt?: DateTimeNullableFilter<"Sequence"> | Date | string | null
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    sequenceTemplate?: XOR<SequenceTemplateScalarRelationFilter, SequenceTemplateWhereInput>
    reminders?: ReminderListRelationFilter
  }

  export type SequenceOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    sequenceTemplateId?: SortOrder
    startAt?: SortOrder
    cancelledAt?: SortOrderInput | SortOrder
    account?: AccountOrderByWithRelationInput
    sequenceTemplate?: SequenceTemplateOrderByWithRelationInput
    reminders?: ReminderOrderByRelationAggregateInput
  }

  export type SequenceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SequenceWhereInput | SequenceWhereInput[]
    OR?: SequenceWhereInput[]
    NOT?: SequenceWhereInput | SequenceWhereInput[]
    accountId?: StringFilter<"Sequence"> | string
    sequenceTemplateId?: StringFilter<"Sequence"> | string
    startAt?: DateTimeFilter<"Sequence"> | Date | string
    cancelledAt?: DateTimeNullableFilter<"Sequence"> | Date | string | null
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    sequenceTemplate?: XOR<SequenceTemplateScalarRelationFilter, SequenceTemplateWhereInput>
    reminders?: ReminderListRelationFilter
  }, "id">

  export type SequenceOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    sequenceTemplateId?: SortOrder
    startAt?: SortOrder
    cancelledAt?: SortOrderInput | SortOrder
    _count?: SequenceCountOrderByAggregateInput
    _max?: SequenceMaxOrderByAggregateInput
    _min?: SequenceMinOrderByAggregateInput
  }

  export type SequenceScalarWhereWithAggregatesInput = {
    AND?: SequenceScalarWhereWithAggregatesInput | SequenceScalarWhereWithAggregatesInput[]
    OR?: SequenceScalarWhereWithAggregatesInput[]
    NOT?: SequenceScalarWhereWithAggregatesInput | SequenceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sequence"> | string
    accountId?: StringWithAggregatesFilter<"Sequence"> | string
    sequenceTemplateId?: StringWithAggregatesFilter<"Sequence"> | string
    startAt?: DateTimeWithAggregatesFilter<"Sequence"> | Date | string
    cancelledAt?: DateTimeNullableWithAggregatesFilter<"Sequence"> | Date | string | null
  }

  export type ReminderWhereInput = {
    AND?: ReminderWhereInput | ReminderWhereInput[]
    OR?: ReminderWhereInput[]
    NOT?: ReminderWhereInput | ReminderWhereInput[]
    id?: StringFilter<"Reminder"> | string
    sequenceId?: StringFilter<"Reminder"> | string
    customerId?: StringFilter<"Reminder"> | string
    accountId?: StringFilter<"Reminder"> | string
    templateId?: StringFilter<"Reminder"> | string
    channel?: StringFilter<"Reminder"> | string
    sendAt?: DateTimeFilter<"Reminder"> | Date | string
    sentAt?: DateTimeNullableFilter<"Reminder"> | Date | string | null
    status?: StringFilter<"Reminder"> | string
    jobId?: StringFilter<"Reminder"> | string
    sequence?: XOR<SequenceScalarRelationFilter, SequenceWhereInput>
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    template?: XOR<TemplateScalarRelationFilter, TemplateWhereInput>
  }

  export type ReminderOrderByWithRelationInput = {
    id?: SortOrder
    sequenceId?: SortOrder
    customerId?: SortOrder
    accountId?: SortOrder
    templateId?: SortOrder
    channel?: SortOrder
    sendAt?: SortOrder
    sentAt?: SortOrderInput | SortOrder
    status?: SortOrder
    jobId?: SortOrder
    sequence?: SequenceOrderByWithRelationInput
    customer?: CustomerOrderByWithRelationInput
    account?: AccountOrderByWithRelationInput
    template?: TemplateOrderByWithRelationInput
  }

  export type ReminderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReminderWhereInput | ReminderWhereInput[]
    OR?: ReminderWhereInput[]
    NOT?: ReminderWhereInput | ReminderWhereInput[]
    sequenceId?: StringFilter<"Reminder"> | string
    customerId?: StringFilter<"Reminder"> | string
    accountId?: StringFilter<"Reminder"> | string
    templateId?: StringFilter<"Reminder"> | string
    channel?: StringFilter<"Reminder"> | string
    sendAt?: DateTimeFilter<"Reminder"> | Date | string
    sentAt?: DateTimeNullableFilter<"Reminder"> | Date | string | null
    status?: StringFilter<"Reminder"> | string
    jobId?: StringFilter<"Reminder"> | string
    sequence?: XOR<SequenceScalarRelationFilter, SequenceWhereInput>
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    template?: XOR<TemplateScalarRelationFilter, TemplateWhereInput>
  }, "id">

  export type ReminderOrderByWithAggregationInput = {
    id?: SortOrder
    sequenceId?: SortOrder
    customerId?: SortOrder
    accountId?: SortOrder
    templateId?: SortOrder
    channel?: SortOrder
    sendAt?: SortOrder
    sentAt?: SortOrderInput | SortOrder
    status?: SortOrder
    jobId?: SortOrder
    _count?: ReminderCountOrderByAggregateInput
    _max?: ReminderMaxOrderByAggregateInput
    _min?: ReminderMinOrderByAggregateInput
  }

  export type ReminderScalarWhereWithAggregatesInput = {
    AND?: ReminderScalarWhereWithAggregatesInput | ReminderScalarWhereWithAggregatesInput[]
    OR?: ReminderScalarWhereWithAggregatesInput[]
    NOT?: ReminderScalarWhereWithAggregatesInput | ReminderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reminder"> | string
    sequenceId?: StringWithAggregatesFilter<"Reminder"> | string
    customerId?: StringWithAggregatesFilter<"Reminder"> | string
    accountId?: StringWithAggregatesFilter<"Reminder"> | string
    templateId?: StringWithAggregatesFilter<"Reminder"> | string
    channel?: StringWithAggregatesFilter<"Reminder"> | string
    sendAt?: DateTimeWithAggregatesFilter<"Reminder"> | Date | string
    sentAt?: DateTimeNullableWithAggregatesFilter<"Reminder"> | Date | string | null
    status?: StringWithAggregatesFilter<"Reminder"> | string
    jobId?: StringWithAggregatesFilter<"Reminder"> | string
  }

  export type AccountCreateInput = {
    id?: string
    name: string
    apiKey: string
    createdAt?: Date | string
    templates?: TemplateCreateNestedManyWithoutAccountInput
    sequenceTemplates?: SequenceTemplateCreateNestedManyWithoutAccountInput
    customers?: CustomerCreateNestedManyWithoutAccountInput
    sequences?: SequenceCreateNestedManyWithoutAccountInput
    reminders?: ReminderCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    name: string
    apiKey: string
    createdAt?: Date | string
    templates?: TemplateUncheckedCreateNestedManyWithoutAccountInput
    sequenceTemplates?: SequenceTemplateUncheckedCreateNestedManyWithoutAccountInput
    customers?: CustomerUncheckedCreateNestedManyWithoutAccountInput
    sequences?: SequenceUncheckedCreateNestedManyWithoutAccountInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templates?: TemplateUpdateManyWithoutAccountNestedInput
    sequenceTemplates?: SequenceTemplateUpdateManyWithoutAccountNestedInput
    customers?: CustomerUpdateManyWithoutAccountNestedInput
    sequences?: SequenceUpdateManyWithoutAccountNestedInput
    reminders?: ReminderUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templates?: TemplateUncheckedUpdateManyWithoutAccountNestedInput
    sequenceTemplates?: SequenceTemplateUncheckedUpdateManyWithoutAccountNestedInput
    customers?: CustomerUncheckedUpdateManyWithoutAccountNestedInput
    sequences?: SequenceUncheckedUpdateManyWithoutAccountNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountCreateManyInput = {
    id?: string
    name: string
    apiKey: string
    createdAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    externalId: string
    createdAt?: Date | string
    account: AccountCreateNestedOneWithoutCustomersInput
    reminders?: ReminderCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    accountId: string
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    externalId: string
    createdAt?: Date | string
    reminders?: ReminderUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneRequiredWithoutCustomersNestedInput
    reminders?: ReminderUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reminders?: ReminderUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    accountId: string
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    externalId: string
    createdAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateCreateInput = {
    id?: string
    name: string
    channel: string
    content: string
    account: AccountCreateNestedOneWithoutTemplatesInput
    sequenceSteps?: SequenceStepCreateNestedManyWithoutTemplateInput
    reminders?: ReminderCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUncheckedCreateInput = {
    id?: string
    accountId: string
    name: string
    channel: string
    content: string
    sequenceSteps?: SequenceStepUncheckedCreateNestedManyWithoutTemplateInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    account?: AccountUpdateOneRequiredWithoutTemplatesNestedInput
    sequenceSteps?: SequenceStepUpdateManyWithoutTemplateNestedInput
    reminders?: ReminderUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sequenceSteps?: SequenceStepUncheckedUpdateManyWithoutTemplateNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateCreateManyInput = {
    id?: string
    accountId: string
    name: string
    channel: string
    content: string
  }

  export type TemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type TemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type SequenceTemplateCreateInput = {
    id?: string
    name: string
    cancelOnEvent?: string | null
    createdAt?: Date | string
    account: AccountCreateNestedOneWithoutSequenceTemplatesInput
    steps?: SequenceStepCreateNestedManyWithoutSequenceTemplateInput
    sequences?: SequenceCreateNestedManyWithoutSequenceTemplateInput
  }

  export type SequenceTemplateUncheckedCreateInput = {
    id?: string
    accountId: string
    name: string
    cancelOnEvent?: string | null
    createdAt?: Date | string
    steps?: SequenceStepUncheckedCreateNestedManyWithoutSequenceTemplateInput
    sequences?: SequenceUncheckedCreateNestedManyWithoutSequenceTemplateInput
  }

  export type SequenceTemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cancelOnEvent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneRequiredWithoutSequenceTemplatesNestedInput
    steps?: SequenceStepUpdateManyWithoutSequenceTemplateNestedInput
    sequences?: SequenceUpdateManyWithoutSequenceTemplateNestedInput
  }

  export type SequenceTemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cancelOnEvent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: SequenceStepUncheckedUpdateManyWithoutSequenceTemplateNestedInput
    sequences?: SequenceUncheckedUpdateManyWithoutSequenceTemplateNestedInput
  }

  export type SequenceTemplateCreateManyInput = {
    id?: string
    accountId: string
    name: string
    cancelOnEvent?: string | null
    createdAt?: Date | string
  }

  export type SequenceTemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cancelOnEvent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SequenceTemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cancelOnEvent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SequenceStepCreateInput = {
    id?: string
    order: number
    delayMinutes: number
    channel: string
    sequenceTemplate: SequenceTemplateCreateNestedOneWithoutStepsInput
    template: TemplateCreateNestedOneWithoutSequenceStepsInput
  }

  export type SequenceStepUncheckedCreateInput = {
    id?: string
    sequenceTemplateId: string
    order: number
    delayMinutes: number
    channel: string
    templateId: string
  }

  export type SequenceStepUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    delayMinutes?: IntFieldUpdateOperationsInput | number
    channel?: StringFieldUpdateOperationsInput | string
    sequenceTemplate?: SequenceTemplateUpdateOneRequiredWithoutStepsNestedInput
    template?: TemplateUpdateOneRequiredWithoutSequenceStepsNestedInput
  }

  export type SequenceStepUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequenceTemplateId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    delayMinutes?: IntFieldUpdateOperationsInput | number
    channel?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
  }

  export type SequenceStepCreateManyInput = {
    id?: string
    sequenceTemplateId: string
    order: number
    delayMinutes: number
    channel: string
    templateId: string
  }

  export type SequenceStepUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    delayMinutes?: IntFieldUpdateOperationsInput | number
    channel?: StringFieldUpdateOperationsInput | string
  }

  export type SequenceStepUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequenceTemplateId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    delayMinutes?: IntFieldUpdateOperationsInput | number
    channel?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
  }

  export type SequenceCreateInput = {
    id?: string
    startAt: Date | string
    cancelledAt?: Date | string | null
    account: AccountCreateNestedOneWithoutSequencesInput
    sequenceTemplate: SequenceTemplateCreateNestedOneWithoutSequencesInput
    reminders?: ReminderCreateNestedManyWithoutSequenceInput
  }

  export type SequenceUncheckedCreateInput = {
    id?: string
    accountId: string
    sequenceTemplateId: string
    startAt: Date | string
    cancelledAt?: Date | string | null
    reminders?: ReminderUncheckedCreateNestedManyWithoutSequenceInput
  }

  export type SequenceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    account?: AccountUpdateOneRequiredWithoutSequencesNestedInput
    sequenceTemplate?: SequenceTemplateUpdateOneRequiredWithoutSequencesNestedInput
    reminders?: ReminderUpdateManyWithoutSequenceNestedInput
  }

  export type SequenceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    sequenceTemplateId?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reminders?: ReminderUncheckedUpdateManyWithoutSequenceNestedInput
  }

  export type SequenceCreateManyInput = {
    id?: string
    accountId: string
    sequenceTemplateId: string
    startAt: Date | string
    cancelledAt?: Date | string | null
  }

  export type SequenceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SequenceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    sequenceTemplateId?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReminderCreateInput = {
    id?: string
    channel: string
    sendAt: Date | string
    sentAt?: Date | string | null
    status: string
    jobId: string
    sequence: SequenceCreateNestedOneWithoutRemindersInput
    customer: CustomerCreateNestedOneWithoutRemindersInput
    account: AccountCreateNestedOneWithoutRemindersInput
    template: TemplateCreateNestedOneWithoutRemindersInput
  }

  export type ReminderUncheckedCreateInput = {
    id?: string
    sequenceId: string
    customerId: string
    accountId: string
    templateId: string
    channel: string
    sendAt: Date | string
    sentAt?: Date | string | null
    status: string
    jobId: string
  }

  export type ReminderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    sendAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    sequence?: SequenceUpdateOneRequiredWithoutRemindersNestedInput
    customer?: CustomerUpdateOneRequiredWithoutRemindersNestedInput
    account?: AccountUpdateOneRequiredWithoutRemindersNestedInput
    template?: TemplateUpdateOneRequiredWithoutRemindersNestedInput
  }

  export type ReminderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequenceId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    sendAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
  }

  export type ReminderCreateManyInput = {
    id?: string
    sequenceId: string
    customerId: string
    accountId: string
    templateId: string
    channel: string
    sendAt: Date | string
    sentAt?: Date | string | null
    status: string
    jobId: string
  }

  export type ReminderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    sendAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
  }

  export type ReminderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequenceId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    sendAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
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

  export type TemplateListRelationFilter = {
    every?: TemplateWhereInput
    some?: TemplateWhereInput
    none?: TemplateWhereInput
  }

  export type SequenceTemplateListRelationFilter = {
    every?: SequenceTemplateWhereInput
    some?: SequenceTemplateWhereInput
    none?: SequenceTemplateWhereInput
  }

  export type CustomerListRelationFilter = {
    every?: CustomerWhereInput
    some?: CustomerWhereInput
    none?: CustomerWhereInput
  }

  export type SequenceListRelationFilter = {
    every?: SequenceWhereInput
    some?: SequenceWhereInput
    none?: SequenceWhereInput
  }

  export type ReminderListRelationFilter = {
    every?: ReminderWhereInput
    some?: ReminderWhereInput
    none?: ReminderWhereInput
  }

  export type TemplateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SequenceTemplateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SequenceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReminderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    apiKey?: SortOrder
    createdAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    apiKey?: SortOrder
    createdAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    apiKey?: SortOrder
    createdAt?: SortOrder
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

  export type AccountScalarRelationFilter = {
    is?: AccountWhereInput
    isNot?: AccountWhereInput
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    externalId?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    externalId?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    externalId?: SortOrder
    createdAt?: SortOrder
  }

  export type SequenceStepListRelationFilter = {
    every?: SequenceStepWhereInput
    some?: SequenceStepWhereInput
    none?: SequenceStepWhereInput
  }

  export type SequenceStepOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TemplateCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    name?: SortOrder
    channel?: SortOrder
    content?: SortOrder
  }

  export type TemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    name?: SortOrder
    channel?: SortOrder
    content?: SortOrder
  }

  export type TemplateMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    name?: SortOrder
    channel?: SortOrder
    content?: SortOrder
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SequenceTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    name?: SortOrder
    cancelOnEvent?: SortOrder
    createdAt?: SortOrder
  }

  export type SequenceTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    name?: SortOrder
    cancelOnEvent?: SortOrder
    createdAt?: SortOrder
  }

  export type SequenceTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    name?: SortOrder
    cancelOnEvent?: SortOrder
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

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type SequenceTemplateScalarRelationFilter = {
    is?: SequenceTemplateWhereInput
    isNot?: SequenceTemplateWhereInput
  }

  export type TemplateScalarRelationFilter = {
    is?: TemplateWhereInput
    isNot?: TemplateWhereInput
  }

  export type SequenceStepCountOrderByAggregateInput = {
    id?: SortOrder
    sequenceTemplateId?: SortOrder
    order?: SortOrder
    delayMinutes?: SortOrder
    channel?: SortOrder
    templateId?: SortOrder
  }

  export type SequenceStepAvgOrderByAggregateInput = {
    order?: SortOrder
    delayMinutes?: SortOrder
  }

  export type SequenceStepMaxOrderByAggregateInput = {
    id?: SortOrder
    sequenceTemplateId?: SortOrder
    order?: SortOrder
    delayMinutes?: SortOrder
    channel?: SortOrder
    templateId?: SortOrder
  }

  export type SequenceStepMinOrderByAggregateInput = {
    id?: SortOrder
    sequenceTemplateId?: SortOrder
    order?: SortOrder
    delayMinutes?: SortOrder
    channel?: SortOrder
    templateId?: SortOrder
  }

  export type SequenceStepSumOrderByAggregateInput = {
    order?: SortOrder
    delayMinutes?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type SequenceCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    sequenceTemplateId?: SortOrder
    startAt?: SortOrder
    cancelledAt?: SortOrder
  }

  export type SequenceMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    sequenceTemplateId?: SortOrder
    startAt?: SortOrder
    cancelledAt?: SortOrder
  }

  export type SequenceMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    sequenceTemplateId?: SortOrder
    startAt?: SortOrder
    cancelledAt?: SortOrder
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

  export type SequenceScalarRelationFilter = {
    is?: SequenceWhereInput
    isNot?: SequenceWhereInput
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type ReminderCountOrderByAggregateInput = {
    id?: SortOrder
    sequenceId?: SortOrder
    customerId?: SortOrder
    accountId?: SortOrder
    templateId?: SortOrder
    channel?: SortOrder
    sendAt?: SortOrder
    sentAt?: SortOrder
    status?: SortOrder
    jobId?: SortOrder
  }

  export type ReminderMaxOrderByAggregateInput = {
    id?: SortOrder
    sequenceId?: SortOrder
    customerId?: SortOrder
    accountId?: SortOrder
    templateId?: SortOrder
    channel?: SortOrder
    sendAt?: SortOrder
    sentAt?: SortOrder
    status?: SortOrder
    jobId?: SortOrder
  }

  export type ReminderMinOrderByAggregateInput = {
    id?: SortOrder
    sequenceId?: SortOrder
    customerId?: SortOrder
    accountId?: SortOrder
    templateId?: SortOrder
    channel?: SortOrder
    sendAt?: SortOrder
    sentAt?: SortOrder
    status?: SortOrder
    jobId?: SortOrder
  }

  export type TemplateCreateNestedManyWithoutAccountInput = {
    create?: XOR<TemplateCreateWithoutAccountInput, TemplateUncheckedCreateWithoutAccountInput> | TemplateCreateWithoutAccountInput[] | TemplateUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutAccountInput | TemplateCreateOrConnectWithoutAccountInput[]
    createMany?: TemplateCreateManyAccountInputEnvelope
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
  }

  export type SequenceTemplateCreateNestedManyWithoutAccountInput = {
    create?: XOR<SequenceTemplateCreateWithoutAccountInput, SequenceTemplateUncheckedCreateWithoutAccountInput> | SequenceTemplateCreateWithoutAccountInput[] | SequenceTemplateUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: SequenceTemplateCreateOrConnectWithoutAccountInput | SequenceTemplateCreateOrConnectWithoutAccountInput[]
    createMany?: SequenceTemplateCreateManyAccountInputEnvelope
    connect?: SequenceTemplateWhereUniqueInput | SequenceTemplateWhereUniqueInput[]
  }

  export type CustomerCreateNestedManyWithoutAccountInput = {
    create?: XOR<CustomerCreateWithoutAccountInput, CustomerUncheckedCreateWithoutAccountInput> | CustomerCreateWithoutAccountInput[] | CustomerUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutAccountInput | CustomerCreateOrConnectWithoutAccountInput[]
    createMany?: CustomerCreateManyAccountInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type SequenceCreateNestedManyWithoutAccountInput = {
    create?: XOR<SequenceCreateWithoutAccountInput, SequenceUncheckedCreateWithoutAccountInput> | SequenceCreateWithoutAccountInput[] | SequenceUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: SequenceCreateOrConnectWithoutAccountInput | SequenceCreateOrConnectWithoutAccountInput[]
    createMany?: SequenceCreateManyAccountInputEnvelope
    connect?: SequenceWhereUniqueInput | SequenceWhereUniqueInput[]
  }

  export type ReminderCreateNestedManyWithoutAccountInput = {
    create?: XOR<ReminderCreateWithoutAccountInput, ReminderUncheckedCreateWithoutAccountInput> | ReminderCreateWithoutAccountInput[] | ReminderUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutAccountInput | ReminderCreateOrConnectWithoutAccountInput[]
    createMany?: ReminderCreateManyAccountInputEnvelope
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
  }

  export type TemplateUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<TemplateCreateWithoutAccountInput, TemplateUncheckedCreateWithoutAccountInput> | TemplateCreateWithoutAccountInput[] | TemplateUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutAccountInput | TemplateCreateOrConnectWithoutAccountInput[]
    createMany?: TemplateCreateManyAccountInputEnvelope
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
  }

  export type SequenceTemplateUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<SequenceTemplateCreateWithoutAccountInput, SequenceTemplateUncheckedCreateWithoutAccountInput> | SequenceTemplateCreateWithoutAccountInput[] | SequenceTemplateUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: SequenceTemplateCreateOrConnectWithoutAccountInput | SequenceTemplateCreateOrConnectWithoutAccountInput[]
    createMany?: SequenceTemplateCreateManyAccountInputEnvelope
    connect?: SequenceTemplateWhereUniqueInput | SequenceTemplateWhereUniqueInput[]
  }

  export type CustomerUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<CustomerCreateWithoutAccountInput, CustomerUncheckedCreateWithoutAccountInput> | CustomerCreateWithoutAccountInput[] | CustomerUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutAccountInput | CustomerCreateOrConnectWithoutAccountInput[]
    createMany?: CustomerCreateManyAccountInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type SequenceUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<SequenceCreateWithoutAccountInput, SequenceUncheckedCreateWithoutAccountInput> | SequenceCreateWithoutAccountInput[] | SequenceUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: SequenceCreateOrConnectWithoutAccountInput | SequenceCreateOrConnectWithoutAccountInput[]
    createMany?: SequenceCreateManyAccountInputEnvelope
    connect?: SequenceWhereUniqueInput | SequenceWhereUniqueInput[]
  }

  export type ReminderUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<ReminderCreateWithoutAccountInput, ReminderUncheckedCreateWithoutAccountInput> | ReminderCreateWithoutAccountInput[] | ReminderUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutAccountInput | ReminderCreateOrConnectWithoutAccountInput[]
    createMany?: ReminderCreateManyAccountInputEnvelope
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TemplateUpdateManyWithoutAccountNestedInput = {
    create?: XOR<TemplateCreateWithoutAccountInput, TemplateUncheckedCreateWithoutAccountInput> | TemplateCreateWithoutAccountInput[] | TemplateUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutAccountInput | TemplateCreateOrConnectWithoutAccountInput[]
    upsert?: TemplateUpsertWithWhereUniqueWithoutAccountInput | TemplateUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: TemplateCreateManyAccountInputEnvelope
    set?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    disconnect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    delete?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    update?: TemplateUpdateWithWhereUniqueWithoutAccountInput | TemplateUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: TemplateUpdateManyWithWhereWithoutAccountInput | TemplateUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
  }

  export type SequenceTemplateUpdateManyWithoutAccountNestedInput = {
    create?: XOR<SequenceTemplateCreateWithoutAccountInput, SequenceTemplateUncheckedCreateWithoutAccountInput> | SequenceTemplateCreateWithoutAccountInput[] | SequenceTemplateUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: SequenceTemplateCreateOrConnectWithoutAccountInput | SequenceTemplateCreateOrConnectWithoutAccountInput[]
    upsert?: SequenceTemplateUpsertWithWhereUniqueWithoutAccountInput | SequenceTemplateUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: SequenceTemplateCreateManyAccountInputEnvelope
    set?: SequenceTemplateWhereUniqueInput | SequenceTemplateWhereUniqueInput[]
    disconnect?: SequenceTemplateWhereUniqueInput | SequenceTemplateWhereUniqueInput[]
    delete?: SequenceTemplateWhereUniqueInput | SequenceTemplateWhereUniqueInput[]
    connect?: SequenceTemplateWhereUniqueInput | SequenceTemplateWhereUniqueInput[]
    update?: SequenceTemplateUpdateWithWhereUniqueWithoutAccountInput | SequenceTemplateUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: SequenceTemplateUpdateManyWithWhereWithoutAccountInput | SequenceTemplateUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: SequenceTemplateScalarWhereInput | SequenceTemplateScalarWhereInput[]
  }

  export type CustomerUpdateManyWithoutAccountNestedInput = {
    create?: XOR<CustomerCreateWithoutAccountInput, CustomerUncheckedCreateWithoutAccountInput> | CustomerCreateWithoutAccountInput[] | CustomerUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutAccountInput | CustomerCreateOrConnectWithoutAccountInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutAccountInput | CustomerUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: CustomerCreateManyAccountInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutAccountInput | CustomerUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutAccountInput | CustomerUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type SequenceUpdateManyWithoutAccountNestedInput = {
    create?: XOR<SequenceCreateWithoutAccountInput, SequenceUncheckedCreateWithoutAccountInput> | SequenceCreateWithoutAccountInput[] | SequenceUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: SequenceCreateOrConnectWithoutAccountInput | SequenceCreateOrConnectWithoutAccountInput[]
    upsert?: SequenceUpsertWithWhereUniqueWithoutAccountInput | SequenceUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: SequenceCreateManyAccountInputEnvelope
    set?: SequenceWhereUniqueInput | SequenceWhereUniqueInput[]
    disconnect?: SequenceWhereUniqueInput | SequenceWhereUniqueInput[]
    delete?: SequenceWhereUniqueInput | SequenceWhereUniqueInput[]
    connect?: SequenceWhereUniqueInput | SequenceWhereUniqueInput[]
    update?: SequenceUpdateWithWhereUniqueWithoutAccountInput | SequenceUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: SequenceUpdateManyWithWhereWithoutAccountInput | SequenceUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: SequenceScalarWhereInput | SequenceScalarWhereInput[]
  }

  export type ReminderUpdateManyWithoutAccountNestedInput = {
    create?: XOR<ReminderCreateWithoutAccountInput, ReminderUncheckedCreateWithoutAccountInput> | ReminderCreateWithoutAccountInput[] | ReminderUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutAccountInput | ReminderCreateOrConnectWithoutAccountInput[]
    upsert?: ReminderUpsertWithWhereUniqueWithoutAccountInput | ReminderUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: ReminderCreateManyAccountInputEnvelope
    set?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    disconnect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    delete?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    update?: ReminderUpdateWithWhereUniqueWithoutAccountInput | ReminderUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: ReminderUpdateManyWithWhereWithoutAccountInput | ReminderUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
  }

  export type TemplateUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<TemplateCreateWithoutAccountInput, TemplateUncheckedCreateWithoutAccountInput> | TemplateCreateWithoutAccountInput[] | TemplateUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutAccountInput | TemplateCreateOrConnectWithoutAccountInput[]
    upsert?: TemplateUpsertWithWhereUniqueWithoutAccountInput | TemplateUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: TemplateCreateManyAccountInputEnvelope
    set?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    disconnect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    delete?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    update?: TemplateUpdateWithWhereUniqueWithoutAccountInput | TemplateUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: TemplateUpdateManyWithWhereWithoutAccountInput | TemplateUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
  }

  export type SequenceTemplateUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<SequenceTemplateCreateWithoutAccountInput, SequenceTemplateUncheckedCreateWithoutAccountInput> | SequenceTemplateCreateWithoutAccountInput[] | SequenceTemplateUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: SequenceTemplateCreateOrConnectWithoutAccountInput | SequenceTemplateCreateOrConnectWithoutAccountInput[]
    upsert?: SequenceTemplateUpsertWithWhereUniqueWithoutAccountInput | SequenceTemplateUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: SequenceTemplateCreateManyAccountInputEnvelope
    set?: SequenceTemplateWhereUniqueInput | SequenceTemplateWhereUniqueInput[]
    disconnect?: SequenceTemplateWhereUniqueInput | SequenceTemplateWhereUniqueInput[]
    delete?: SequenceTemplateWhereUniqueInput | SequenceTemplateWhereUniqueInput[]
    connect?: SequenceTemplateWhereUniqueInput | SequenceTemplateWhereUniqueInput[]
    update?: SequenceTemplateUpdateWithWhereUniqueWithoutAccountInput | SequenceTemplateUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: SequenceTemplateUpdateManyWithWhereWithoutAccountInput | SequenceTemplateUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: SequenceTemplateScalarWhereInput | SequenceTemplateScalarWhereInput[]
  }

  export type CustomerUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<CustomerCreateWithoutAccountInput, CustomerUncheckedCreateWithoutAccountInput> | CustomerCreateWithoutAccountInput[] | CustomerUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutAccountInput | CustomerCreateOrConnectWithoutAccountInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutAccountInput | CustomerUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: CustomerCreateManyAccountInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutAccountInput | CustomerUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutAccountInput | CustomerUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type SequenceUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<SequenceCreateWithoutAccountInput, SequenceUncheckedCreateWithoutAccountInput> | SequenceCreateWithoutAccountInput[] | SequenceUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: SequenceCreateOrConnectWithoutAccountInput | SequenceCreateOrConnectWithoutAccountInput[]
    upsert?: SequenceUpsertWithWhereUniqueWithoutAccountInput | SequenceUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: SequenceCreateManyAccountInputEnvelope
    set?: SequenceWhereUniqueInput | SequenceWhereUniqueInput[]
    disconnect?: SequenceWhereUniqueInput | SequenceWhereUniqueInput[]
    delete?: SequenceWhereUniqueInput | SequenceWhereUniqueInput[]
    connect?: SequenceWhereUniqueInput | SequenceWhereUniqueInput[]
    update?: SequenceUpdateWithWhereUniqueWithoutAccountInput | SequenceUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: SequenceUpdateManyWithWhereWithoutAccountInput | SequenceUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: SequenceScalarWhereInput | SequenceScalarWhereInput[]
  }

  export type ReminderUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<ReminderCreateWithoutAccountInput, ReminderUncheckedCreateWithoutAccountInput> | ReminderCreateWithoutAccountInput[] | ReminderUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutAccountInput | ReminderCreateOrConnectWithoutAccountInput[]
    upsert?: ReminderUpsertWithWhereUniqueWithoutAccountInput | ReminderUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: ReminderCreateManyAccountInputEnvelope
    set?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    disconnect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    delete?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    update?: ReminderUpdateWithWhereUniqueWithoutAccountInput | ReminderUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: ReminderUpdateManyWithWhereWithoutAccountInput | ReminderUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
  }

  export type AccountCreateNestedOneWithoutCustomersInput = {
    create?: XOR<AccountCreateWithoutCustomersInput, AccountUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: AccountCreateOrConnectWithoutCustomersInput
    connect?: AccountWhereUniqueInput
  }

  export type ReminderCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ReminderCreateWithoutCustomerInput, ReminderUncheckedCreateWithoutCustomerInput> | ReminderCreateWithoutCustomerInput[] | ReminderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutCustomerInput | ReminderCreateOrConnectWithoutCustomerInput[]
    createMany?: ReminderCreateManyCustomerInputEnvelope
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
  }

  export type ReminderUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ReminderCreateWithoutCustomerInput, ReminderUncheckedCreateWithoutCustomerInput> | ReminderCreateWithoutCustomerInput[] | ReminderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutCustomerInput | ReminderCreateOrConnectWithoutCustomerInput[]
    createMany?: ReminderCreateManyCustomerInputEnvelope
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
  }

  export type AccountUpdateOneRequiredWithoutCustomersNestedInput = {
    create?: XOR<AccountCreateWithoutCustomersInput, AccountUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: AccountCreateOrConnectWithoutCustomersInput
    upsert?: AccountUpsertWithoutCustomersInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutCustomersInput, AccountUpdateWithoutCustomersInput>, AccountUncheckedUpdateWithoutCustomersInput>
  }

  export type ReminderUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ReminderCreateWithoutCustomerInput, ReminderUncheckedCreateWithoutCustomerInput> | ReminderCreateWithoutCustomerInput[] | ReminderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutCustomerInput | ReminderCreateOrConnectWithoutCustomerInput[]
    upsert?: ReminderUpsertWithWhereUniqueWithoutCustomerInput | ReminderUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ReminderCreateManyCustomerInputEnvelope
    set?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    disconnect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    delete?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    update?: ReminderUpdateWithWhereUniqueWithoutCustomerInput | ReminderUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ReminderUpdateManyWithWhereWithoutCustomerInput | ReminderUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
  }

  export type ReminderUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ReminderCreateWithoutCustomerInput, ReminderUncheckedCreateWithoutCustomerInput> | ReminderCreateWithoutCustomerInput[] | ReminderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutCustomerInput | ReminderCreateOrConnectWithoutCustomerInput[]
    upsert?: ReminderUpsertWithWhereUniqueWithoutCustomerInput | ReminderUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ReminderCreateManyCustomerInputEnvelope
    set?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    disconnect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    delete?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    update?: ReminderUpdateWithWhereUniqueWithoutCustomerInput | ReminderUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ReminderUpdateManyWithWhereWithoutCustomerInput | ReminderUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
  }

  export type AccountCreateNestedOneWithoutTemplatesInput = {
    create?: XOR<AccountCreateWithoutTemplatesInput, AccountUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: AccountCreateOrConnectWithoutTemplatesInput
    connect?: AccountWhereUniqueInput
  }

  export type SequenceStepCreateNestedManyWithoutTemplateInput = {
    create?: XOR<SequenceStepCreateWithoutTemplateInput, SequenceStepUncheckedCreateWithoutTemplateInput> | SequenceStepCreateWithoutTemplateInput[] | SequenceStepUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: SequenceStepCreateOrConnectWithoutTemplateInput | SequenceStepCreateOrConnectWithoutTemplateInput[]
    createMany?: SequenceStepCreateManyTemplateInputEnvelope
    connect?: SequenceStepWhereUniqueInput | SequenceStepWhereUniqueInput[]
  }

  export type ReminderCreateNestedManyWithoutTemplateInput = {
    create?: XOR<ReminderCreateWithoutTemplateInput, ReminderUncheckedCreateWithoutTemplateInput> | ReminderCreateWithoutTemplateInput[] | ReminderUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutTemplateInput | ReminderCreateOrConnectWithoutTemplateInput[]
    createMany?: ReminderCreateManyTemplateInputEnvelope
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
  }

  export type SequenceStepUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: XOR<SequenceStepCreateWithoutTemplateInput, SequenceStepUncheckedCreateWithoutTemplateInput> | SequenceStepCreateWithoutTemplateInput[] | SequenceStepUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: SequenceStepCreateOrConnectWithoutTemplateInput | SequenceStepCreateOrConnectWithoutTemplateInput[]
    createMany?: SequenceStepCreateManyTemplateInputEnvelope
    connect?: SequenceStepWhereUniqueInput | SequenceStepWhereUniqueInput[]
  }

  export type ReminderUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: XOR<ReminderCreateWithoutTemplateInput, ReminderUncheckedCreateWithoutTemplateInput> | ReminderCreateWithoutTemplateInput[] | ReminderUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutTemplateInput | ReminderCreateOrConnectWithoutTemplateInput[]
    createMany?: ReminderCreateManyTemplateInputEnvelope
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
  }

  export type AccountUpdateOneRequiredWithoutTemplatesNestedInput = {
    create?: XOR<AccountCreateWithoutTemplatesInput, AccountUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: AccountCreateOrConnectWithoutTemplatesInput
    upsert?: AccountUpsertWithoutTemplatesInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutTemplatesInput, AccountUpdateWithoutTemplatesInput>, AccountUncheckedUpdateWithoutTemplatesInput>
  }

  export type SequenceStepUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<SequenceStepCreateWithoutTemplateInput, SequenceStepUncheckedCreateWithoutTemplateInput> | SequenceStepCreateWithoutTemplateInput[] | SequenceStepUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: SequenceStepCreateOrConnectWithoutTemplateInput | SequenceStepCreateOrConnectWithoutTemplateInput[]
    upsert?: SequenceStepUpsertWithWhereUniqueWithoutTemplateInput | SequenceStepUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: SequenceStepCreateManyTemplateInputEnvelope
    set?: SequenceStepWhereUniqueInput | SequenceStepWhereUniqueInput[]
    disconnect?: SequenceStepWhereUniqueInput | SequenceStepWhereUniqueInput[]
    delete?: SequenceStepWhereUniqueInput | SequenceStepWhereUniqueInput[]
    connect?: SequenceStepWhereUniqueInput | SequenceStepWhereUniqueInput[]
    update?: SequenceStepUpdateWithWhereUniqueWithoutTemplateInput | SequenceStepUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: SequenceStepUpdateManyWithWhereWithoutTemplateInput | SequenceStepUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: SequenceStepScalarWhereInput | SequenceStepScalarWhereInput[]
  }

  export type ReminderUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<ReminderCreateWithoutTemplateInput, ReminderUncheckedCreateWithoutTemplateInput> | ReminderCreateWithoutTemplateInput[] | ReminderUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutTemplateInput | ReminderCreateOrConnectWithoutTemplateInput[]
    upsert?: ReminderUpsertWithWhereUniqueWithoutTemplateInput | ReminderUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: ReminderCreateManyTemplateInputEnvelope
    set?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    disconnect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    delete?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    update?: ReminderUpdateWithWhereUniqueWithoutTemplateInput | ReminderUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: ReminderUpdateManyWithWhereWithoutTemplateInput | ReminderUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
  }

  export type SequenceStepUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<SequenceStepCreateWithoutTemplateInput, SequenceStepUncheckedCreateWithoutTemplateInput> | SequenceStepCreateWithoutTemplateInput[] | SequenceStepUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: SequenceStepCreateOrConnectWithoutTemplateInput | SequenceStepCreateOrConnectWithoutTemplateInput[]
    upsert?: SequenceStepUpsertWithWhereUniqueWithoutTemplateInput | SequenceStepUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: SequenceStepCreateManyTemplateInputEnvelope
    set?: SequenceStepWhereUniqueInput | SequenceStepWhereUniqueInput[]
    disconnect?: SequenceStepWhereUniqueInput | SequenceStepWhereUniqueInput[]
    delete?: SequenceStepWhereUniqueInput | SequenceStepWhereUniqueInput[]
    connect?: SequenceStepWhereUniqueInput | SequenceStepWhereUniqueInput[]
    update?: SequenceStepUpdateWithWhereUniqueWithoutTemplateInput | SequenceStepUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: SequenceStepUpdateManyWithWhereWithoutTemplateInput | SequenceStepUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: SequenceStepScalarWhereInput | SequenceStepScalarWhereInput[]
  }

  export type ReminderUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<ReminderCreateWithoutTemplateInput, ReminderUncheckedCreateWithoutTemplateInput> | ReminderCreateWithoutTemplateInput[] | ReminderUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutTemplateInput | ReminderCreateOrConnectWithoutTemplateInput[]
    upsert?: ReminderUpsertWithWhereUniqueWithoutTemplateInput | ReminderUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: ReminderCreateManyTemplateInputEnvelope
    set?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    disconnect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    delete?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    update?: ReminderUpdateWithWhereUniqueWithoutTemplateInput | ReminderUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: ReminderUpdateManyWithWhereWithoutTemplateInput | ReminderUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
  }

  export type AccountCreateNestedOneWithoutSequenceTemplatesInput = {
    create?: XOR<AccountCreateWithoutSequenceTemplatesInput, AccountUncheckedCreateWithoutSequenceTemplatesInput>
    connectOrCreate?: AccountCreateOrConnectWithoutSequenceTemplatesInput
    connect?: AccountWhereUniqueInput
  }

  export type SequenceStepCreateNestedManyWithoutSequenceTemplateInput = {
    create?: XOR<SequenceStepCreateWithoutSequenceTemplateInput, SequenceStepUncheckedCreateWithoutSequenceTemplateInput> | SequenceStepCreateWithoutSequenceTemplateInput[] | SequenceStepUncheckedCreateWithoutSequenceTemplateInput[]
    connectOrCreate?: SequenceStepCreateOrConnectWithoutSequenceTemplateInput | SequenceStepCreateOrConnectWithoutSequenceTemplateInput[]
    createMany?: SequenceStepCreateManySequenceTemplateInputEnvelope
    connect?: SequenceStepWhereUniqueInput | SequenceStepWhereUniqueInput[]
  }

  export type SequenceCreateNestedManyWithoutSequenceTemplateInput = {
    create?: XOR<SequenceCreateWithoutSequenceTemplateInput, SequenceUncheckedCreateWithoutSequenceTemplateInput> | SequenceCreateWithoutSequenceTemplateInput[] | SequenceUncheckedCreateWithoutSequenceTemplateInput[]
    connectOrCreate?: SequenceCreateOrConnectWithoutSequenceTemplateInput | SequenceCreateOrConnectWithoutSequenceTemplateInput[]
    createMany?: SequenceCreateManySequenceTemplateInputEnvelope
    connect?: SequenceWhereUniqueInput | SequenceWhereUniqueInput[]
  }

  export type SequenceStepUncheckedCreateNestedManyWithoutSequenceTemplateInput = {
    create?: XOR<SequenceStepCreateWithoutSequenceTemplateInput, SequenceStepUncheckedCreateWithoutSequenceTemplateInput> | SequenceStepCreateWithoutSequenceTemplateInput[] | SequenceStepUncheckedCreateWithoutSequenceTemplateInput[]
    connectOrCreate?: SequenceStepCreateOrConnectWithoutSequenceTemplateInput | SequenceStepCreateOrConnectWithoutSequenceTemplateInput[]
    createMany?: SequenceStepCreateManySequenceTemplateInputEnvelope
    connect?: SequenceStepWhereUniqueInput | SequenceStepWhereUniqueInput[]
  }

  export type SequenceUncheckedCreateNestedManyWithoutSequenceTemplateInput = {
    create?: XOR<SequenceCreateWithoutSequenceTemplateInput, SequenceUncheckedCreateWithoutSequenceTemplateInput> | SequenceCreateWithoutSequenceTemplateInput[] | SequenceUncheckedCreateWithoutSequenceTemplateInput[]
    connectOrCreate?: SequenceCreateOrConnectWithoutSequenceTemplateInput | SequenceCreateOrConnectWithoutSequenceTemplateInput[]
    createMany?: SequenceCreateManySequenceTemplateInputEnvelope
    connect?: SequenceWhereUniqueInput | SequenceWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AccountUpdateOneRequiredWithoutSequenceTemplatesNestedInput = {
    create?: XOR<AccountCreateWithoutSequenceTemplatesInput, AccountUncheckedCreateWithoutSequenceTemplatesInput>
    connectOrCreate?: AccountCreateOrConnectWithoutSequenceTemplatesInput
    upsert?: AccountUpsertWithoutSequenceTemplatesInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutSequenceTemplatesInput, AccountUpdateWithoutSequenceTemplatesInput>, AccountUncheckedUpdateWithoutSequenceTemplatesInput>
  }

  export type SequenceStepUpdateManyWithoutSequenceTemplateNestedInput = {
    create?: XOR<SequenceStepCreateWithoutSequenceTemplateInput, SequenceStepUncheckedCreateWithoutSequenceTemplateInput> | SequenceStepCreateWithoutSequenceTemplateInput[] | SequenceStepUncheckedCreateWithoutSequenceTemplateInput[]
    connectOrCreate?: SequenceStepCreateOrConnectWithoutSequenceTemplateInput | SequenceStepCreateOrConnectWithoutSequenceTemplateInput[]
    upsert?: SequenceStepUpsertWithWhereUniqueWithoutSequenceTemplateInput | SequenceStepUpsertWithWhereUniqueWithoutSequenceTemplateInput[]
    createMany?: SequenceStepCreateManySequenceTemplateInputEnvelope
    set?: SequenceStepWhereUniqueInput | SequenceStepWhereUniqueInput[]
    disconnect?: SequenceStepWhereUniqueInput | SequenceStepWhereUniqueInput[]
    delete?: SequenceStepWhereUniqueInput | SequenceStepWhereUniqueInput[]
    connect?: SequenceStepWhereUniqueInput | SequenceStepWhereUniqueInput[]
    update?: SequenceStepUpdateWithWhereUniqueWithoutSequenceTemplateInput | SequenceStepUpdateWithWhereUniqueWithoutSequenceTemplateInput[]
    updateMany?: SequenceStepUpdateManyWithWhereWithoutSequenceTemplateInput | SequenceStepUpdateManyWithWhereWithoutSequenceTemplateInput[]
    deleteMany?: SequenceStepScalarWhereInput | SequenceStepScalarWhereInput[]
  }

  export type SequenceUpdateManyWithoutSequenceTemplateNestedInput = {
    create?: XOR<SequenceCreateWithoutSequenceTemplateInput, SequenceUncheckedCreateWithoutSequenceTemplateInput> | SequenceCreateWithoutSequenceTemplateInput[] | SequenceUncheckedCreateWithoutSequenceTemplateInput[]
    connectOrCreate?: SequenceCreateOrConnectWithoutSequenceTemplateInput | SequenceCreateOrConnectWithoutSequenceTemplateInput[]
    upsert?: SequenceUpsertWithWhereUniqueWithoutSequenceTemplateInput | SequenceUpsertWithWhereUniqueWithoutSequenceTemplateInput[]
    createMany?: SequenceCreateManySequenceTemplateInputEnvelope
    set?: SequenceWhereUniqueInput | SequenceWhereUniqueInput[]
    disconnect?: SequenceWhereUniqueInput | SequenceWhereUniqueInput[]
    delete?: SequenceWhereUniqueInput | SequenceWhereUniqueInput[]
    connect?: SequenceWhereUniqueInput | SequenceWhereUniqueInput[]
    update?: SequenceUpdateWithWhereUniqueWithoutSequenceTemplateInput | SequenceUpdateWithWhereUniqueWithoutSequenceTemplateInput[]
    updateMany?: SequenceUpdateManyWithWhereWithoutSequenceTemplateInput | SequenceUpdateManyWithWhereWithoutSequenceTemplateInput[]
    deleteMany?: SequenceScalarWhereInput | SequenceScalarWhereInput[]
  }

  export type SequenceStepUncheckedUpdateManyWithoutSequenceTemplateNestedInput = {
    create?: XOR<SequenceStepCreateWithoutSequenceTemplateInput, SequenceStepUncheckedCreateWithoutSequenceTemplateInput> | SequenceStepCreateWithoutSequenceTemplateInput[] | SequenceStepUncheckedCreateWithoutSequenceTemplateInput[]
    connectOrCreate?: SequenceStepCreateOrConnectWithoutSequenceTemplateInput | SequenceStepCreateOrConnectWithoutSequenceTemplateInput[]
    upsert?: SequenceStepUpsertWithWhereUniqueWithoutSequenceTemplateInput | SequenceStepUpsertWithWhereUniqueWithoutSequenceTemplateInput[]
    createMany?: SequenceStepCreateManySequenceTemplateInputEnvelope
    set?: SequenceStepWhereUniqueInput | SequenceStepWhereUniqueInput[]
    disconnect?: SequenceStepWhereUniqueInput | SequenceStepWhereUniqueInput[]
    delete?: SequenceStepWhereUniqueInput | SequenceStepWhereUniqueInput[]
    connect?: SequenceStepWhereUniqueInput | SequenceStepWhereUniqueInput[]
    update?: SequenceStepUpdateWithWhereUniqueWithoutSequenceTemplateInput | SequenceStepUpdateWithWhereUniqueWithoutSequenceTemplateInput[]
    updateMany?: SequenceStepUpdateManyWithWhereWithoutSequenceTemplateInput | SequenceStepUpdateManyWithWhereWithoutSequenceTemplateInput[]
    deleteMany?: SequenceStepScalarWhereInput | SequenceStepScalarWhereInput[]
  }

  export type SequenceUncheckedUpdateManyWithoutSequenceTemplateNestedInput = {
    create?: XOR<SequenceCreateWithoutSequenceTemplateInput, SequenceUncheckedCreateWithoutSequenceTemplateInput> | SequenceCreateWithoutSequenceTemplateInput[] | SequenceUncheckedCreateWithoutSequenceTemplateInput[]
    connectOrCreate?: SequenceCreateOrConnectWithoutSequenceTemplateInput | SequenceCreateOrConnectWithoutSequenceTemplateInput[]
    upsert?: SequenceUpsertWithWhereUniqueWithoutSequenceTemplateInput | SequenceUpsertWithWhereUniqueWithoutSequenceTemplateInput[]
    createMany?: SequenceCreateManySequenceTemplateInputEnvelope
    set?: SequenceWhereUniqueInput | SequenceWhereUniqueInput[]
    disconnect?: SequenceWhereUniqueInput | SequenceWhereUniqueInput[]
    delete?: SequenceWhereUniqueInput | SequenceWhereUniqueInput[]
    connect?: SequenceWhereUniqueInput | SequenceWhereUniqueInput[]
    update?: SequenceUpdateWithWhereUniqueWithoutSequenceTemplateInput | SequenceUpdateWithWhereUniqueWithoutSequenceTemplateInput[]
    updateMany?: SequenceUpdateManyWithWhereWithoutSequenceTemplateInput | SequenceUpdateManyWithWhereWithoutSequenceTemplateInput[]
    deleteMany?: SequenceScalarWhereInput | SequenceScalarWhereInput[]
  }

  export type SequenceTemplateCreateNestedOneWithoutStepsInput = {
    create?: XOR<SequenceTemplateCreateWithoutStepsInput, SequenceTemplateUncheckedCreateWithoutStepsInput>
    connectOrCreate?: SequenceTemplateCreateOrConnectWithoutStepsInput
    connect?: SequenceTemplateWhereUniqueInput
  }

  export type TemplateCreateNestedOneWithoutSequenceStepsInput = {
    create?: XOR<TemplateCreateWithoutSequenceStepsInput, TemplateUncheckedCreateWithoutSequenceStepsInput>
    connectOrCreate?: TemplateCreateOrConnectWithoutSequenceStepsInput
    connect?: TemplateWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SequenceTemplateUpdateOneRequiredWithoutStepsNestedInput = {
    create?: XOR<SequenceTemplateCreateWithoutStepsInput, SequenceTemplateUncheckedCreateWithoutStepsInput>
    connectOrCreate?: SequenceTemplateCreateOrConnectWithoutStepsInput
    upsert?: SequenceTemplateUpsertWithoutStepsInput
    connect?: SequenceTemplateWhereUniqueInput
    update?: XOR<XOR<SequenceTemplateUpdateToOneWithWhereWithoutStepsInput, SequenceTemplateUpdateWithoutStepsInput>, SequenceTemplateUncheckedUpdateWithoutStepsInput>
  }

  export type TemplateUpdateOneRequiredWithoutSequenceStepsNestedInput = {
    create?: XOR<TemplateCreateWithoutSequenceStepsInput, TemplateUncheckedCreateWithoutSequenceStepsInput>
    connectOrCreate?: TemplateCreateOrConnectWithoutSequenceStepsInput
    upsert?: TemplateUpsertWithoutSequenceStepsInput
    connect?: TemplateWhereUniqueInput
    update?: XOR<XOR<TemplateUpdateToOneWithWhereWithoutSequenceStepsInput, TemplateUpdateWithoutSequenceStepsInput>, TemplateUncheckedUpdateWithoutSequenceStepsInput>
  }

  export type AccountCreateNestedOneWithoutSequencesInput = {
    create?: XOR<AccountCreateWithoutSequencesInput, AccountUncheckedCreateWithoutSequencesInput>
    connectOrCreate?: AccountCreateOrConnectWithoutSequencesInput
    connect?: AccountWhereUniqueInput
  }

  export type SequenceTemplateCreateNestedOneWithoutSequencesInput = {
    create?: XOR<SequenceTemplateCreateWithoutSequencesInput, SequenceTemplateUncheckedCreateWithoutSequencesInput>
    connectOrCreate?: SequenceTemplateCreateOrConnectWithoutSequencesInput
    connect?: SequenceTemplateWhereUniqueInput
  }

  export type ReminderCreateNestedManyWithoutSequenceInput = {
    create?: XOR<ReminderCreateWithoutSequenceInput, ReminderUncheckedCreateWithoutSequenceInput> | ReminderCreateWithoutSequenceInput[] | ReminderUncheckedCreateWithoutSequenceInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutSequenceInput | ReminderCreateOrConnectWithoutSequenceInput[]
    createMany?: ReminderCreateManySequenceInputEnvelope
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
  }

  export type ReminderUncheckedCreateNestedManyWithoutSequenceInput = {
    create?: XOR<ReminderCreateWithoutSequenceInput, ReminderUncheckedCreateWithoutSequenceInput> | ReminderCreateWithoutSequenceInput[] | ReminderUncheckedCreateWithoutSequenceInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutSequenceInput | ReminderCreateOrConnectWithoutSequenceInput[]
    createMany?: ReminderCreateManySequenceInputEnvelope
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AccountUpdateOneRequiredWithoutSequencesNestedInput = {
    create?: XOR<AccountCreateWithoutSequencesInput, AccountUncheckedCreateWithoutSequencesInput>
    connectOrCreate?: AccountCreateOrConnectWithoutSequencesInput
    upsert?: AccountUpsertWithoutSequencesInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutSequencesInput, AccountUpdateWithoutSequencesInput>, AccountUncheckedUpdateWithoutSequencesInput>
  }

  export type SequenceTemplateUpdateOneRequiredWithoutSequencesNestedInput = {
    create?: XOR<SequenceTemplateCreateWithoutSequencesInput, SequenceTemplateUncheckedCreateWithoutSequencesInput>
    connectOrCreate?: SequenceTemplateCreateOrConnectWithoutSequencesInput
    upsert?: SequenceTemplateUpsertWithoutSequencesInput
    connect?: SequenceTemplateWhereUniqueInput
    update?: XOR<XOR<SequenceTemplateUpdateToOneWithWhereWithoutSequencesInput, SequenceTemplateUpdateWithoutSequencesInput>, SequenceTemplateUncheckedUpdateWithoutSequencesInput>
  }

  export type ReminderUpdateManyWithoutSequenceNestedInput = {
    create?: XOR<ReminderCreateWithoutSequenceInput, ReminderUncheckedCreateWithoutSequenceInput> | ReminderCreateWithoutSequenceInput[] | ReminderUncheckedCreateWithoutSequenceInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutSequenceInput | ReminderCreateOrConnectWithoutSequenceInput[]
    upsert?: ReminderUpsertWithWhereUniqueWithoutSequenceInput | ReminderUpsertWithWhereUniqueWithoutSequenceInput[]
    createMany?: ReminderCreateManySequenceInputEnvelope
    set?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    disconnect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    delete?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    update?: ReminderUpdateWithWhereUniqueWithoutSequenceInput | ReminderUpdateWithWhereUniqueWithoutSequenceInput[]
    updateMany?: ReminderUpdateManyWithWhereWithoutSequenceInput | ReminderUpdateManyWithWhereWithoutSequenceInput[]
    deleteMany?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
  }

  export type ReminderUncheckedUpdateManyWithoutSequenceNestedInput = {
    create?: XOR<ReminderCreateWithoutSequenceInput, ReminderUncheckedCreateWithoutSequenceInput> | ReminderCreateWithoutSequenceInput[] | ReminderUncheckedCreateWithoutSequenceInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutSequenceInput | ReminderCreateOrConnectWithoutSequenceInput[]
    upsert?: ReminderUpsertWithWhereUniqueWithoutSequenceInput | ReminderUpsertWithWhereUniqueWithoutSequenceInput[]
    createMany?: ReminderCreateManySequenceInputEnvelope
    set?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    disconnect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    delete?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    update?: ReminderUpdateWithWhereUniqueWithoutSequenceInput | ReminderUpdateWithWhereUniqueWithoutSequenceInput[]
    updateMany?: ReminderUpdateManyWithWhereWithoutSequenceInput | ReminderUpdateManyWithWhereWithoutSequenceInput[]
    deleteMany?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
  }

  export type SequenceCreateNestedOneWithoutRemindersInput = {
    create?: XOR<SequenceCreateWithoutRemindersInput, SequenceUncheckedCreateWithoutRemindersInput>
    connectOrCreate?: SequenceCreateOrConnectWithoutRemindersInput
    connect?: SequenceWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutRemindersInput = {
    create?: XOR<CustomerCreateWithoutRemindersInput, CustomerUncheckedCreateWithoutRemindersInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutRemindersInput
    connect?: CustomerWhereUniqueInput
  }

  export type AccountCreateNestedOneWithoutRemindersInput = {
    create?: XOR<AccountCreateWithoutRemindersInput, AccountUncheckedCreateWithoutRemindersInput>
    connectOrCreate?: AccountCreateOrConnectWithoutRemindersInput
    connect?: AccountWhereUniqueInput
  }

  export type TemplateCreateNestedOneWithoutRemindersInput = {
    create?: XOR<TemplateCreateWithoutRemindersInput, TemplateUncheckedCreateWithoutRemindersInput>
    connectOrCreate?: TemplateCreateOrConnectWithoutRemindersInput
    connect?: TemplateWhereUniqueInput
  }

  export type SequenceUpdateOneRequiredWithoutRemindersNestedInput = {
    create?: XOR<SequenceCreateWithoutRemindersInput, SequenceUncheckedCreateWithoutRemindersInput>
    connectOrCreate?: SequenceCreateOrConnectWithoutRemindersInput
    upsert?: SequenceUpsertWithoutRemindersInput
    connect?: SequenceWhereUniqueInput
    update?: XOR<XOR<SequenceUpdateToOneWithWhereWithoutRemindersInput, SequenceUpdateWithoutRemindersInput>, SequenceUncheckedUpdateWithoutRemindersInput>
  }

  export type CustomerUpdateOneRequiredWithoutRemindersNestedInput = {
    create?: XOR<CustomerCreateWithoutRemindersInput, CustomerUncheckedCreateWithoutRemindersInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutRemindersInput
    upsert?: CustomerUpsertWithoutRemindersInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutRemindersInput, CustomerUpdateWithoutRemindersInput>, CustomerUncheckedUpdateWithoutRemindersInput>
  }

  export type AccountUpdateOneRequiredWithoutRemindersNestedInput = {
    create?: XOR<AccountCreateWithoutRemindersInput, AccountUncheckedCreateWithoutRemindersInput>
    connectOrCreate?: AccountCreateOrConnectWithoutRemindersInput
    upsert?: AccountUpsertWithoutRemindersInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutRemindersInput, AccountUpdateWithoutRemindersInput>, AccountUncheckedUpdateWithoutRemindersInput>
  }

  export type TemplateUpdateOneRequiredWithoutRemindersNestedInput = {
    create?: XOR<TemplateCreateWithoutRemindersInput, TemplateUncheckedCreateWithoutRemindersInput>
    connectOrCreate?: TemplateCreateOrConnectWithoutRemindersInput
    upsert?: TemplateUpsertWithoutRemindersInput
    connect?: TemplateWhereUniqueInput
    update?: XOR<XOR<TemplateUpdateToOneWithWhereWithoutRemindersInput, TemplateUpdateWithoutRemindersInput>, TemplateUncheckedUpdateWithoutRemindersInput>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type TemplateCreateWithoutAccountInput = {
    id?: string
    name: string
    channel: string
    content: string
    sequenceSteps?: SequenceStepCreateNestedManyWithoutTemplateInput
    reminders?: ReminderCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUncheckedCreateWithoutAccountInput = {
    id?: string
    name: string
    channel: string
    content: string
    sequenceSteps?: SequenceStepUncheckedCreateNestedManyWithoutTemplateInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type TemplateCreateOrConnectWithoutAccountInput = {
    where: TemplateWhereUniqueInput
    create: XOR<TemplateCreateWithoutAccountInput, TemplateUncheckedCreateWithoutAccountInput>
  }

  export type TemplateCreateManyAccountInputEnvelope = {
    data: TemplateCreateManyAccountInput | TemplateCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type SequenceTemplateCreateWithoutAccountInput = {
    id?: string
    name: string
    cancelOnEvent?: string | null
    createdAt?: Date | string
    steps?: SequenceStepCreateNestedManyWithoutSequenceTemplateInput
    sequences?: SequenceCreateNestedManyWithoutSequenceTemplateInput
  }

  export type SequenceTemplateUncheckedCreateWithoutAccountInput = {
    id?: string
    name: string
    cancelOnEvent?: string | null
    createdAt?: Date | string
    steps?: SequenceStepUncheckedCreateNestedManyWithoutSequenceTemplateInput
    sequences?: SequenceUncheckedCreateNestedManyWithoutSequenceTemplateInput
  }

  export type SequenceTemplateCreateOrConnectWithoutAccountInput = {
    where: SequenceTemplateWhereUniqueInput
    create: XOR<SequenceTemplateCreateWithoutAccountInput, SequenceTemplateUncheckedCreateWithoutAccountInput>
  }

  export type SequenceTemplateCreateManyAccountInputEnvelope = {
    data: SequenceTemplateCreateManyAccountInput | SequenceTemplateCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type CustomerCreateWithoutAccountInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    externalId: string
    createdAt?: Date | string
    reminders?: ReminderCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutAccountInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    externalId: string
    createdAt?: Date | string
    reminders?: ReminderUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutAccountInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutAccountInput, CustomerUncheckedCreateWithoutAccountInput>
  }

  export type CustomerCreateManyAccountInputEnvelope = {
    data: CustomerCreateManyAccountInput | CustomerCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type SequenceCreateWithoutAccountInput = {
    id?: string
    startAt: Date | string
    cancelledAt?: Date | string | null
    sequenceTemplate: SequenceTemplateCreateNestedOneWithoutSequencesInput
    reminders?: ReminderCreateNestedManyWithoutSequenceInput
  }

  export type SequenceUncheckedCreateWithoutAccountInput = {
    id?: string
    sequenceTemplateId: string
    startAt: Date | string
    cancelledAt?: Date | string | null
    reminders?: ReminderUncheckedCreateNestedManyWithoutSequenceInput
  }

  export type SequenceCreateOrConnectWithoutAccountInput = {
    where: SequenceWhereUniqueInput
    create: XOR<SequenceCreateWithoutAccountInput, SequenceUncheckedCreateWithoutAccountInput>
  }

  export type SequenceCreateManyAccountInputEnvelope = {
    data: SequenceCreateManyAccountInput | SequenceCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type ReminderCreateWithoutAccountInput = {
    id?: string
    channel: string
    sendAt: Date | string
    sentAt?: Date | string | null
    status: string
    jobId: string
    sequence: SequenceCreateNestedOneWithoutRemindersInput
    customer: CustomerCreateNestedOneWithoutRemindersInput
    template: TemplateCreateNestedOneWithoutRemindersInput
  }

  export type ReminderUncheckedCreateWithoutAccountInput = {
    id?: string
    sequenceId: string
    customerId: string
    templateId: string
    channel: string
    sendAt: Date | string
    sentAt?: Date | string | null
    status: string
    jobId: string
  }

  export type ReminderCreateOrConnectWithoutAccountInput = {
    where: ReminderWhereUniqueInput
    create: XOR<ReminderCreateWithoutAccountInput, ReminderUncheckedCreateWithoutAccountInput>
  }

  export type ReminderCreateManyAccountInputEnvelope = {
    data: ReminderCreateManyAccountInput | ReminderCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type TemplateUpsertWithWhereUniqueWithoutAccountInput = {
    where: TemplateWhereUniqueInput
    update: XOR<TemplateUpdateWithoutAccountInput, TemplateUncheckedUpdateWithoutAccountInput>
    create: XOR<TemplateCreateWithoutAccountInput, TemplateUncheckedCreateWithoutAccountInput>
  }

  export type TemplateUpdateWithWhereUniqueWithoutAccountInput = {
    where: TemplateWhereUniqueInput
    data: XOR<TemplateUpdateWithoutAccountInput, TemplateUncheckedUpdateWithoutAccountInput>
  }

  export type TemplateUpdateManyWithWhereWithoutAccountInput = {
    where: TemplateScalarWhereInput
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyWithoutAccountInput>
  }

  export type TemplateScalarWhereInput = {
    AND?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
    OR?: TemplateScalarWhereInput[]
    NOT?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
    id?: StringFilter<"Template"> | string
    accountId?: StringFilter<"Template"> | string
    name?: StringFilter<"Template"> | string
    channel?: StringFilter<"Template"> | string
    content?: StringFilter<"Template"> | string
  }

  export type SequenceTemplateUpsertWithWhereUniqueWithoutAccountInput = {
    where: SequenceTemplateWhereUniqueInput
    update: XOR<SequenceTemplateUpdateWithoutAccountInput, SequenceTemplateUncheckedUpdateWithoutAccountInput>
    create: XOR<SequenceTemplateCreateWithoutAccountInput, SequenceTemplateUncheckedCreateWithoutAccountInput>
  }

  export type SequenceTemplateUpdateWithWhereUniqueWithoutAccountInput = {
    where: SequenceTemplateWhereUniqueInput
    data: XOR<SequenceTemplateUpdateWithoutAccountInput, SequenceTemplateUncheckedUpdateWithoutAccountInput>
  }

  export type SequenceTemplateUpdateManyWithWhereWithoutAccountInput = {
    where: SequenceTemplateScalarWhereInput
    data: XOR<SequenceTemplateUpdateManyMutationInput, SequenceTemplateUncheckedUpdateManyWithoutAccountInput>
  }

  export type SequenceTemplateScalarWhereInput = {
    AND?: SequenceTemplateScalarWhereInput | SequenceTemplateScalarWhereInput[]
    OR?: SequenceTemplateScalarWhereInput[]
    NOT?: SequenceTemplateScalarWhereInput | SequenceTemplateScalarWhereInput[]
    id?: StringFilter<"SequenceTemplate"> | string
    accountId?: StringFilter<"SequenceTemplate"> | string
    name?: StringFilter<"SequenceTemplate"> | string
    cancelOnEvent?: StringNullableFilter<"SequenceTemplate"> | string | null
    createdAt?: DateTimeFilter<"SequenceTemplate"> | Date | string
  }

  export type CustomerUpsertWithWhereUniqueWithoutAccountInput = {
    where: CustomerWhereUniqueInput
    update: XOR<CustomerUpdateWithoutAccountInput, CustomerUncheckedUpdateWithoutAccountInput>
    create: XOR<CustomerCreateWithoutAccountInput, CustomerUncheckedCreateWithoutAccountInput>
  }

  export type CustomerUpdateWithWhereUniqueWithoutAccountInput = {
    where: CustomerWhereUniqueInput
    data: XOR<CustomerUpdateWithoutAccountInput, CustomerUncheckedUpdateWithoutAccountInput>
  }

  export type CustomerUpdateManyWithWhereWithoutAccountInput = {
    where: CustomerScalarWhereInput
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyWithoutAccountInput>
  }

  export type CustomerScalarWhereInput = {
    AND?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
    OR?: CustomerScalarWhereInput[]
    NOT?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
    id?: StringFilter<"Customer"> | string
    accountId?: StringFilter<"Customer"> | string
    firstName?: StringFilter<"Customer"> | string
    lastName?: StringFilter<"Customer"> | string
    email?: StringFilter<"Customer"> | string
    phoneNumber?: StringFilter<"Customer"> | string
    externalId?: StringFilter<"Customer"> | string
    createdAt?: DateTimeFilter<"Customer"> | Date | string
  }

  export type SequenceUpsertWithWhereUniqueWithoutAccountInput = {
    where: SequenceWhereUniqueInput
    update: XOR<SequenceUpdateWithoutAccountInput, SequenceUncheckedUpdateWithoutAccountInput>
    create: XOR<SequenceCreateWithoutAccountInput, SequenceUncheckedCreateWithoutAccountInput>
  }

  export type SequenceUpdateWithWhereUniqueWithoutAccountInput = {
    where: SequenceWhereUniqueInput
    data: XOR<SequenceUpdateWithoutAccountInput, SequenceUncheckedUpdateWithoutAccountInput>
  }

  export type SequenceUpdateManyWithWhereWithoutAccountInput = {
    where: SequenceScalarWhereInput
    data: XOR<SequenceUpdateManyMutationInput, SequenceUncheckedUpdateManyWithoutAccountInput>
  }

  export type SequenceScalarWhereInput = {
    AND?: SequenceScalarWhereInput | SequenceScalarWhereInput[]
    OR?: SequenceScalarWhereInput[]
    NOT?: SequenceScalarWhereInput | SequenceScalarWhereInput[]
    id?: StringFilter<"Sequence"> | string
    accountId?: StringFilter<"Sequence"> | string
    sequenceTemplateId?: StringFilter<"Sequence"> | string
    startAt?: DateTimeFilter<"Sequence"> | Date | string
    cancelledAt?: DateTimeNullableFilter<"Sequence"> | Date | string | null
  }

  export type ReminderUpsertWithWhereUniqueWithoutAccountInput = {
    where: ReminderWhereUniqueInput
    update: XOR<ReminderUpdateWithoutAccountInput, ReminderUncheckedUpdateWithoutAccountInput>
    create: XOR<ReminderCreateWithoutAccountInput, ReminderUncheckedCreateWithoutAccountInput>
  }

  export type ReminderUpdateWithWhereUniqueWithoutAccountInput = {
    where: ReminderWhereUniqueInput
    data: XOR<ReminderUpdateWithoutAccountInput, ReminderUncheckedUpdateWithoutAccountInput>
  }

  export type ReminderUpdateManyWithWhereWithoutAccountInput = {
    where: ReminderScalarWhereInput
    data: XOR<ReminderUpdateManyMutationInput, ReminderUncheckedUpdateManyWithoutAccountInput>
  }

  export type ReminderScalarWhereInput = {
    AND?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
    OR?: ReminderScalarWhereInput[]
    NOT?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
    id?: StringFilter<"Reminder"> | string
    sequenceId?: StringFilter<"Reminder"> | string
    customerId?: StringFilter<"Reminder"> | string
    accountId?: StringFilter<"Reminder"> | string
    templateId?: StringFilter<"Reminder"> | string
    channel?: StringFilter<"Reminder"> | string
    sendAt?: DateTimeFilter<"Reminder"> | Date | string
    sentAt?: DateTimeNullableFilter<"Reminder"> | Date | string | null
    status?: StringFilter<"Reminder"> | string
    jobId?: StringFilter<"Reminder"> | string
  }

  export type AccountCreateWithoutCustomersInput = {
    id?: string
    name: string
    apiKey: string
    createdAt?: Date | string
    templates?: TemplateCreateNestedManyWithoutAccountInput
    sequenceTemplates?: SequenceTemplateCreateNestedManyWithoutAccountInput
    sequences?: SequenceCreateNestedManyWithoutAccountInput
    reminders?: ReminderCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutCustomersInput = {
    id?: string
    name: string
    apiKey: string
    createdAt?: Date | string
    templates?: TemplateUncheckedCreateNestedManyWithoutAccountInput
    sequenceTemplates?: SequenceTemplateUncheckedCreateNestedManyWithoutAccountInput
    sequences?: SequenceUncheckedCreateNestedManyWithoutAccountInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutCustomersInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutCustomersInput, AccountUncheckedCreateWithoutCustomersInput>
  }

  export type ReminderCreateWithoutCustomerInput = {
    id?: string
    channel: string
    sendAt: Date | string
    sentAt?: Date | string | null
    status: string
    jobId: string
    sequence: SequenceCreateNestedOneWithoutRemindersInput
    account: AccountCreateNestedOneWithoutRemindersInput
    template: TemplateCreateNestedOneWithoutRemindersInput
  }

  export type ReminderUncheckedCreateWithoutCustomerInput = {
    id?: string
    sequenceId: string
    accountId: string
    templateId: string
    channel: string
    sendAt: Date | string
    sentAt?: Date | string | null
    status: string
    jobId: string
  }

  export type ReminderCreateOrConnectWithoutCustomerInput = {
    where: ReminderWhereUniqueInput
    create: XOR<ReminderCreateWithoutCustomerInput, ReminderUncheckedCreateWithoutCustomerInput>
  }

  export type ReminderCreateManyCustomerInputEnvelope = {
    data: ReminderCreateManyCustomerInput | ReminderCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithoutCustomersInput = {
    update: XOR<AccountUpdateWithoutCustomersInput, AccountUncheckedUpdateWithoutCustomersInput>
    create: XOR<AccountCreateWithoutCustomersInput, AccountUncheckedCreateWithoutCustomersInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutCustomersInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutCustomersInput, AccountUncheckedUpdateWithoutCustomersInput>
  }

  export type AccountUpdateWithoutCustomersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templates?: TemplateUpdateManyWithoutAccountNestedInput
    sequenceTemplates?: SequenceTemplateUpdateManyWithoutAccountNestedInput
    sequences?: SequenceUpdateManyWithoutAccountNestedInput
    reminders?: ReminderUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutCustomersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templates?: TemplateUncheckedUpdateManyWithoutAccountNestedInput
    sequenceTemplates?: SequenceTemplateUncheckedUpdateManyWithoutAccountNestedInput
    sequences?: SequenceUncheckedUpdateManyWithoutAccountNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type ReminderUpsertWithWhereUniqueWithoutCustomerInput = {
    where: ReminderWhereUniqueInput
    update: XOR<ReminderUpdateWithoutCustomerInput, ReminderUncheckedUpdateWithoutCustomerInput>
    create: XOR<ReminderCreateWithoutCustomerInput, ReminderUncheckedCreateWithoutCustomerInput>
  }

  export type ReminderUpdateWithWhereUniqueWithoutCustomerInput = {
    where: ReminderWhereUniqueInput
    data: XOR<ReminderUpdateWithoutCustomerInput, ReminderUncheckedUpdateWithoutCustomerInput>
  }

  export type ReminderUpdateManyWithWhereWithoutCustomerInput = {
    where: ReminderScalarWhereInput
    data: XOR<ReminderUpdateManyMutationInput, ReminderUncheckedUpdateManyWithoutCustomerInput>
  }

  export type AccountCreateWithoutTemplatesInput = {
    id?: string
    name: string
    apiKey: string
    createdAt?: Date | string
    sequenceTemplates?: SequenceTemplateCreateNestedManyWithoutAccountInput
    customers?: CustomerCreateNestedManyWithoutAccountInput
    sequences?: SequenceCreateNestedManyWithoutAccountInput
    reminders?: ReminderCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutTemplatesInput = {
    id?: string
    name: string
    apiKey: string
    createdAt?: Date | string
    sequenceTemplates?: SequenceTemplateUncheckedCreateNestedManyWithoutAccountInput
    customers?: CustomerUncheckedCreateNestedManyWithoutAccountInput
    sequences?: SequenceUncheckedCreateNestedManyWithoutAccountInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutTemplatesInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutTemplatesInput, AccountUncheckedCreateWithoutTemplatesInput>
  }

  export type SequenceStepCreateWithoutTemplateInput = {
    id?: string
    order: number
    delayMinutes: number
    channel: string
    sequenceTemplate: SequenceTemplateCreateNestedOneWithoutStepsInput
  }

  export type SequenceStepUncheckedCreateWithoutTemplateInput = {
    id?: string
    sequenceTemplateId: string
    order: number
    delayMinutes: number
    channel: string
  }

  export type SequenceStepCreateOrConnectWithoutTemplateInput = {
    where: SequenceStepWhereUniqueInput
    create: XOR<SequenceStepCreateWithoutTemplateInput, SequenceStepUncheckedCreateWithoutTemplateInput>
  }

  export type SequenceStepCreateManyTemplateInputEnvelope = {
    data: SequenceStepCreateManyTemplateInput | SequenceStepCreateManyTemplateInput[]
    skipDuplicates?: boolean
  }

  export type ReminderCreateWithoutTemplateInput = {
    id?: string
    channel: string
    sendAt: Date | string
    sentAt?: Date | string | null
    status: string
    jobId: string
    sequence: SequenceCreateNestedOneWithoutRemindersInput
    customer: CustomerCreateNestedOneWithoutRemindersInput
    account: AccountCreateNestedOneWithoutRemindersInput
  }

  export type ReminderUncheckedCreateWithoutTemplateInput = {
    id?: string
    sequenceId: string
    customerId: string
    accountId: string
    channel: string
    sendAt: Date | string
    sentAt?: Date | string | null
    status: string
    jobId: string
  }

  export type ReminderCreateOrConnectWithoutTemplateInput = {
    where: ReminderWhereUniqueInput
    create: XOR<ReminderCreateWithoutTemplateInput, ReminderUncheckedCreateWithoutTemplateInput>
  }

  export type ReminderCreateManyTemplateInputEnvelope = {
    data: ReminderCreateManyTemplateInput | ReminderCreateManyTemplateInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithoutTemplatesInput = {
    update: XOR<AccountUpdateWithoutTemplatesInput, AccountUncheckedUpdateWithoutTemplatesInput>
    create: XOR<AccountCreateWithoutTemplatesInput, AccountUncheckedCreateWithoutTemplatesInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutTemplatesInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutTemplatesInput, AccountUncheckedUpdateWithoutTemplatesInput>
  }

  export type AccountUpdateWithoutTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sequenceTemplates?: SequenceTemplateUpdateManyWithoutAccountNestedInput
    customers?: CustomerUpdateManyWithoutAccountNestedInput
    sequences?: SequenceUpdateManyWithoutAccountNestedInput
    reminders?: ReminderUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sequenceTemplates?: SequenceTemplateUncheckedUpdateManyWithoutAccountNestedInput
    customers?: CustomerUncheckedUpdateManyWithoutAccountNestedInput
    sequences?: SequenceUncheckedUpdateManyWithoutAccountNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type SequenceStepUpsertWithWhereUniqueWithoutTemplateInput = {
    where: SequenceStepWhereUniqueInput
    update: XOR<SequenceStepUpdateWithoutTemplateInput, SequenceStepUncheckedUpdateWithoutTemplateInput>
    create: XOR<SequenceStepCreateWithoutTemplateInput, SequenceStepUncheckedCreateWithoutTemplateInput>
  }

  export type SequenceStepUpdateWithWhereUniqueWithoutTemplateInput = {
    where: SequenceStepWhereUniqueInput
    data: XOR<SequenceStepUpdateWithoutTemplateInput, SequenceStepUncheckedUpdateWithoutTemplateInput>
  }

  export type SequenceStepUpdateManyWithWhereWithoutTemplateInput = {
    where: SequenceStepScalarWhereInput
    data: XOR<SequenceStepUpdateManyMutationInput, SequenceStepUncheckedUpdateManyWithoutTemplateInput>
  }

  export type SequenceStepScalarWhereInput = {
    AND?: SequenceStepScalarWhereInput | SequenceStepScalarWhereInput[]
    OR?: SequenceStepScalarWhereInput[]
    NOT?: SequenceStepScalarWhereInput | SequenceStepScalarWhereInput[]
    id?: StringFilter<"SequenceStep"> | string
    sequenceTemplateId?: StringFilter<"SequenceStep"> | string
    order?: IntFilter<"SequenceStep"> | number
    delayMinutes?: IntFilter<"SequenceStep"> | number
    channel?: StringFilter<"SequenceStep"> | string
    templateId?: StringFilter<"SequenceStep"> | string
  }

  export type ReminderUpsertWithWhereUniqueWithoutTemplateInput = {
    where: ReminderWhereUniqueInput
    update: XOR<ReminderUpdateWithoutTemplateInput, ReminderUncheckedUpdateWithoutTemplateInput>
    create: XOR<ReminderCreateWithoutTemplateInput, ReminderUncheckedCreateWithoutTemplateInput>
  }

  export type ReminderUpdateWithWhereUniqueWithoutTemplateInput = {
    where: ReminderWhereUniqueInput
    data: XOR<ReminderUpdateWithoutTemplateInput, ReminderUncheckedUpdateWithoutTemplateInput>
  }

  export type ReminderUpdateManyWithWhereWithoutTemplateInput = {
    where: ReminderScalarWhereInput
    data: XOR<ReminderUpdateManyMutationInput, ReminderUncheckedUpdateManyWithoutTemplateInput>
  }

  export type AccountCreateWithoutSequenceTemplatesInput = {
    id?: string
    name: string
    apiKey: string
    createdAt?: Date | string
    templates?: TemplateCreateNestedManyWithoutAccountInput
    customers?: CustomerCreateNestedManyWithoutAccountInput
    sequences?: SequenceCreateNestedManyWithoutAccountInput
    reminders?: ReminderCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutSequenceTemplatesInput = {
    id?: string
    name: string
    apiKey: string
    createdAt?: Date | string
    templates?: TemplateUncheckedCreateNestedManyWithoutAccountInput
    customers?: CustomerUncheckedCreateNestedManyWithoutAccountInput
    sequences?: SequenceUncheckedCreateNestedManyWithoutAccountInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutSequenceTemplatesInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutSequenceTemplatesInput, AccountUncheckedCreateWithoutSequenceTemplatesInput>
  }

  export type SequenceStepCreateWithoutSequenceTemplateInput = {
    id?: string
    order: number
    delayMinutes: number
    channel: string
    template: TemplateCreateNestedOneWithoutSequenceStepsInput
  }

  export type SequenceStepUncheckedCreateWithoutSequenceTemplateInput = {
    id?: string
    order: number
    delayMinutes: number
    channel: string
    templateId: string
  }

  export type SequenceStepCreateOrConnectWithoutSequenceTemplateInput = {
    where: SequenceStepWhereUniqueInput
    create: XOR<SequenceStepCreateWithoutSequenceTemplateInput, SequenceStepUncheckedCreateWithoutSequenceTemplateInput>
  }

  export type SequenceStepCreateManySequenceTemplateInputEnvelope = {
    data: SequenceStepCreateManySequenceTemplateInput | SequenceStepCreateManySequenceTemplateInput[]
    skipDuplicates?: boolean
  }

  export type SequenceCreateWithoutSequenceTemplateInput = {
    id?: string
    startAt: Date | string
    cancelledAt?: Date | string | null
    account: AccountCreateNestedOneWithoutSequencesInput
    reminders?: ReminderCreateNestedManyWithoutSequenceInput
  }

  export type SequenceUncheckedCreateWithoutSequenceTemplateInput = {
    id?: string
    accountId: string
    startAt: Date | string
    cancelledAt?: Date | string | null
    reminders?: ReminderUncheckedCreateNestedManyWithoutSequenceInput
  }

  export type SequenceCreateOrConnectWithoutSequenceTemplateInput = {
    where: SequenceWhereUniqueInput
    create: XOR<SequenceCreateWithoutSequenceTemplateInput, SequenceUncheckedCreateWithoutSequenceTemplateInput>
  }

  export type SequenceCreateManySequenceTemplateInputEnvelope = {
    data: SequenceCreateManySequenceTemplateInput | SequenceCreateManySequenceTemplateInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithoutSequenceTemplatesInput = {
    update: XOR<AccountUpdateWithoutSequenceTemplatesInput, AccountUncheckedUpdateWithoutSequenceTemplatesInput>
    create: XOR<AccountCreateWithoutSequenceTemplatesInput, AccountUncheckedCreateWithoutSequenceTemplatesInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutSequenceTemplatesInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutSequenceTemplatesInput, AccountUncheckedUpdateWithoutSequenceTemplatesInput>
  }

  export type AccountUpdateWithoutSequenceTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templates?: TemplateUpdateManyWithoutAccountNestedInput
    customers?: CustomerUpdateManyWithoutAccountNestedInput
    sequences?: SequenceUpdateManyWithoutAccountNestedInput
    reminders?: ReminderUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutSequenceTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templates?: TemplateUncheckedUpdateManyWithoutAccountNestedInput
    customers?: CustomerUncheckedUpdateManyWithoutAccountNestedInput
    sequences?: SequenceUncheckedUpdateManyWithoutAccountNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type SequenceStepUpsertWithWhereUniqueWithoutSequenceTemplateInput = {
    where: SequenceStepWhereUniqueInput
    update: XOR<SequenceStepUpdateWithoutSequenceTemplateInput, SequenceStepUncheckedUpdateWithoutSequenceTemplateInput>
    create: XOR<SequenceStepCreateWithoutSequenceTemplateInput, SequenceStepUncheckedCreateWithoutSequenceTemplateInput>
  }

  export type SequenceStepUpdateWithWhereUniqueWithoutSequenceTemplateInput = {
    where: SequenceStepWhereUniqueInput
    data: XOR<SequenceStepUpdateWithoutSequenceTemplateInput, SequenceStepUncheckedUpdateWithoutSequenceTemplateInput>
  }

  export type SequenceStepUpdateManyWithWhereWithoutSequenceTemplateInput = {
    where: SequenceStepScalarWhereInput
    data: XOR<SequenceStepUpdateManyMutationInput, SequenceStepUncheckedUpdateManyWithoutSequenceTemplateInput>
  }

  export type SequenceUpsertWithWhereUniqueWithoutSequenceTemplateInput = {
    where: SequenceWhereUniqueInput
    update: XOR<SequenceUpdateWithoutSequenceTemplateInput, SequenceUncheckedUpdateWithoutSequenceTemplateInput>
    create: XOR<SequenceCreateWithoutSequenceTemplateInput, SequenceUncheckedCreateWithoutSequenceTemplateInput>
  }

  export type SequenceUpdateWithWhereUniqueWithoutSequenceTemplateInput = {
    where: SequenceWhereUniqueInput
    data: XOR<SequenceUpdateWithoutSequenceTemplateInput, SequenceUncheckedUpdateWithoutSequenceTemplateInput>
  }

  export type SequenceUpdateManyWithWhereWithoutSequenceTemplateInput = {
    where: SequenceScalarWhereInput
    data: XOR<SequenceUpdateManyMutationInput, SequenceUncheckedUpdateManyWithoutSequenceTemplateInput>
  }

  export type SequenceTemplateCreateWithoutStepsInput = {
    id?: string
    name: string
    cancelOnEvent?: string | null
    createdAt?: Date | string
    account: AccountCreateNestedOneWithoutSequenceTemplatesInput
    sequences?: SequenceCreateNestedManyWithoutSequenceTemplateInput
  }

  export type SequenceTemplateUncheckedCreateWithoutStepsInput = {
    id?: string
    accountId: string
    name: string
    cancelOnEvent?: string | null
    createdAt?: Date | string
    sequences?: SequenceUncheckedCreateNestedManyWithoutSequenceTemplateInput
  }

  export type SequenceTemplateCreateOrConnectWithoutStepsInput = {
    where: SequenceTemplateWhereUniqueInput
    create: XOR<SequenceTemplateCreateWithoutStepsInput, SequenceTemplateUncheckedCreateWithoutStepsInput>
  }

  export type TemplateCreateWithoutSequenceStepsInput = {
    id?: string
    name: string
    channel: string
    content: string
    account: AccountCreateNestedOneWithoutTemplatesInput
    reminders?: ReminderCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUncheckedCreateWithoutSequenceStepsInput = {
    id?: string
    accountId: string
    name: string
    channel: string
    content: string
    reminders?: ReminderUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type TemplateCreateOrConnectWithoutSequenceStepsInput = {
    where: TemplateWhereUniqueInput
    create: XOR<TemplateCreateWithoutSequenceStepsInput, TemplateUncheckedCreateWithoutSequenceStepsInput>
  }

  export type SequenceTemplateUpsertWithoutStepsInput = {
    update: XOR<SequenceTemplateUpdateWithoutStepsInput, SequenceTemplateUncheckedUpdateWithoutStepsInput>
    create: XOR<SequenceTemplateCreateWithoutStepsInput, SequenceTemplateUncheckedCreateWithoutStepsInput>
    where?: SequenceTemplateWhereInput
  }

  export type SequenceTemplateUpdateToOneWithWhereWithoutStepsInput = {
    where?: SequenceTemplateWhereInput
    data: XOR<SequenceTemplateUpdateWithoutStepsInput, SequenceTemplateUncheckedUpdateWithoutStepsInput>
  }

  export type SequenceTemplateUpdateWithoutStepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cancelOnEvent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneRequiredWithoutSequenceTemplatesNestedInput
    sequences?: SequenceUpdateManyWithoutSequenceTemplateNestedInput
  }

  export type SequenceTemplateUncheckedUpdateWithoutStepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cancelOnEvent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sequences?: SequenceUncheckedUpdateManyWithoutSequenceTemplateNestedInput
  }

  export type TemplateUpsertWithoutSequenceStepsInput = {
    update: XOR<TemplateUpdateWithoutSequenceStepsInput, TemplateUncheckedUpdateWithoutSequenceStepsInput>
    create: XOR<TemplateCreateWithoutSequenceStepsInput, TemplateUncheckedCreateWithoutSequenceStepsInput>
    where?: TemplateWhereInput
  }

  export type TemplateUpdateToOneWithWhereWithoutSequenceStepsInput = {
    where?: TemplateWhereInput
    data: XOR<TemplateUpdateWithoutSequenceStepsInput, TemplateUncheckedUpdateWithoutSequenceStepsInput>
  }

  export type TemplateUpdateWithoutSequenceStepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    account?: AccountUpdateOneRequiredWithoutTemplatesNestedInput
    reminders?: ReminderUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateUncheckedUpdateWithoutSequenceStepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    reminders?: ReminderUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type AccountCreateWithoutSequencesInput = {
    id?: string
    name: string
    apiKey: string
    createdAt?: Date | string
    templates?: TemplateCreateNestedManyWithoutAccountInput
    sequenceTemplates?: SequenceTemplateCreateNestedManyWithoutAccountInput
    customers?: CustomerCreateNestedManyWithoutAccountInput
    reminders?: ReminderCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutSequencesInput = {
    id?: string
    name: string
    apiKey: string
    createdAt?: Date | string
    templates?: TemplateUncheckedCreateNestedManyWithoutAccountInput
    sequenceTemplates?: SequenceTemplateUncheckedCreateNestedManyWithoutAccountInput
    customers?: CustomerUncheckedCreateNestedManyWithoutAccountInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutSequencesInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutSequencesInput, AccountUncheckedCreateWithoutSequencesInput>
  }

  export type SequenceTemplateCreateWithoutSequencesInput = {
    id?: string
    name: string
    cancelOnEvent?: string | null
    createdAt?: Date | string
    account: AccountCreateNestedOneWithoutSequenceTemplatesInput
    steps?: SequenceStepCreateNestedManyWithoutSequenceTemplateInput
  }

  export type SequenceTemplateUncheckedCreateWithoutSequencesInput = {
    id?: string
    accountId: string
    name: string
    cancelOnEvent?: string | null
    createdAt?: Date | string
    steps?: SequenceStepUncheckedCreateNestedManyWithoutSequenceTemplateInput
  }

  export type SequenceTemplateCreateOrConnectWithoutSequencesInput = {
    where: SequenceTemplateWhereUniqueInput
    create: XOR<SequenceTemplateCreateWithoutSequencesInput, SequenceTemplateUncheckedCreateWithoutSequencesInput>
  }

  export type ReminderCreateWithoutSequenceInput = {
    id?: string
    channel: string
    sendAt: Date | string
    sentAt?: Date | string | null
    status: string
    jobId: string
    customer: CustomerCreateNestedOneWithoutRemindersInput
    account: AccountCreateNestedOneWithoutRemindersInput
    template: TemplateCreateNestedOneWithoutRemindersInput
  }

  export type ReminderUncheckedCreateWithoutSequenceInput = {
    id?: string
    customerId: string
    accountId: string
    templateId: string
    channel: string
    sendAt: Date | string
    sentAt?: Date | string | null
    status: string
    jobId: string
  }

  export type ReminderCreateOrConnectWithoutSequenceInput = {
    where: ReminderWhereUniqueInput
    create: XOR<ReminderCreateWithoutSequenceInput, ReminderUncheckedCreateWithoutSequenceInput>
  }

  export type ReminderCreateManySequenceInputEnvelope = {
    data: ReminderCreateManySequenceInput | ReminderCreateManySequenceInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithoutSequencesInput = {
    update: XOR<AccountUpdateWithoutSequencesInput, AccountUncheckedUpdateWithoutSequencesInput>
    create: XOR<AccountCreateWithoutSequencesInput, AccountUncheckedCreateWithoutSequencesInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutSequencesInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutSequencesInput, AccountUncheckedUpdateWithoutSequencesInput>
  }

  export type AccountUpdateWithoutSequencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templates?: TemplateUpdateManyWithoutAccountNestedInput
    sequenceTemplates?: SequenceTemplateUpdateManyWithoutAccountNestedInput
    customers?: CustomerUpdateManyWithoutAccountNestedInput
    reminders?: ReminderUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutSequencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templates?: TemplateUncheckedUpdateManyWithoutAccountNestedInput
    sequenceTemplates?: SequenceTemplateUncheckedUpdateManyWithoutAccountNestedInput
    customers?: CustomerUncheckedUpdateManyWithoutAccountNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type SequenceTemplateUpsertWithoutSequencesInput = {
    update: XOR<SequenceTemplateUpdateWithoutSequencesInput, SequenceTemplateUncheckedUpdateWithoutSequencesInput>
    create: XOR<SequenceTemplateCreateWithoutSequencesInput, SequenceTemplateUncheckedCreateWithoutSequencesInput>
    where?: SequenceTemplateWhereInput
  }

  export type SequenceTemplateUpdateToOneWithWhereWithoutSequencesInput = {
    where?: SequenceTemplateWhereInput
    data: XOR<SequenceTemplateUpdateWithoutSequencesInput, SequenceTemplateUncheckedUpdateWithoutSequencesInput>
  }

  export type SequenceTemplateUpdateWithoutSequencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cancelOnEvent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneRequiredWithoutSequenceTemplatesNestedInput
    steps?: SequenceStepUpdateManyWithoutSequenceTemplateNestedInput
  }

  export type SequenceTemplateUncheckedUpdateWithoutSequencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cancelOnEvent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: SequenceStepUncheckedUpdateManyWithoutSequenceTemplateNestedInput
  }

  export type ReminderUpsertWithWhereUniqueWithoutSequenceInput = {
    where: ReminderWhereUniqueInput
    update: XOR<ReminderUpdateWithoutSequenceInput, ReminderUncheckedUpdateWithoutSequenceInput>
    create: XOR<ReminderCreateWithoutSequenceInput, ReminderUncheckedCreateWithoutSequenceInput>
  }

  export type ReminderUpdateWithWhereUniqueWithoutSequenceInput = {
    where: ReminderWhereUniqueInput
    data: XOR<ReminderUpdateWithoutSequenceInput, ReminderUncheckedUpdateWithoutSequenceInput>
  }

  export type ReminderUpdateManyWithWhereWithoutSequenceInput = {
    where: ReminderScalarWhereInput
    data: XOR<ReminderUpdateManyMutationInput, ReminderUncheckedUpdateManyWithoutSequenceInput>
  }

  export type SequenceCreateWithoutRemindersInput = {
    id?: string
    startAt: Date | string
    cancelledAt?: Date | string | null
    account: AccountCreateNestedOneWithoutSequencesInput
    sequenceTemplate: SequenceTemplateCreateNestedOneWithoutSequencesInput
  }

  export type SequenceUncheckedCreateWithoutRemindersInput = {
    id?: string
    accountId: string
    sequenceTemplateId: string
    startAt: Date | string
    cancelledAt?: Date | string | null
  }

  export type SequenceCreateOrConnectWithoutRemindersInput = {
    where: SequenceWhereUniqueInput
    create: XOR<SequenceCreateWithoutRemindersInput, SequenceUncheckedCreateWithoutRemindersInput>
  }

  export type CustomerCreateWithoutRemindersInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    externalId: string
    createdAt?: Date | string
    account: AccountCreateNestedOneWithoutCustomersInput
  }

  export type CustomerUncheckedCreateWithoutRemindersInput = {
    id?: string
    accountId: string
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    externalId: string
    createdAt?: Date | string
  }

  export type CustomerCreateOrConnectWithoutRemindersInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutRemindersInput, CustomerUncheckedCreateWithoutRemindersInput>
  }

  export type AccountCreateWithoutRemindersInput = {
    id?: string
    name: string
    apiKey: string
    createdAt?: Date | string
    templates?: TemplateCreateNestedManyWithoutAccountInput
    sequenceTemplates?: SequenceTemplateCreateNestedManyWithoutAccountInput
    customers?: CustomerCreateNestedManyWithoutAccountInput
    sequences?: SequenceCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutRemindersInput = {
    id?: string
    name: string
    apiKey: string
    createdAt?: Date | string
    templates?: TemplateUncheckedCreateNestedManyWithoutAccountInput
    sequenceTemplates?: SequenceTemplateUncheckedCreateNestedManyWithoutAccountInput
    customers?: CustomerUncheckedCreateNestedManyWithoutAccountInput
    sequences?: SequenceUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutRemindersInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutRemindersInput, AccountUncheckedCreateWithoutRemindersInput>
  }

  export type TemplateCreateWithoutRemindersInput = {
    id?: string
    name: string
    channel: string
    content: string
    account: AccountCreateNestedOneWithoutTemplatesInput
    sequenceSteps?: SequenceStepCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUncheckedCreateWithoutRemindersInput = {
    id?: string
    accountId: string
    name: string
    channel: string
    content: string
    sequenceSteps?: SequenceStepUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type TemplateCreateOrConnectWithoutRemindersInput = {
    where: TemplateWhereUniqueInput
    create: XOR<TemplateCreateWithoutRemindersInput, TemplateUncheckedCreateWithoutRemindersInput>
  }

  export type SequenceUpsertWithoutRemindersInput = {
    update: XOR<SequenceUpdateWithoutRemindersInput, SequenceUncheckedUpdateWithoutRemindersInput>
    create: XOR<SequenceCreateWithoutRemindersInput, SequenceUncheckedCreateWithoutRemindersInput>
    where?: SequenceWhereInput
  }

  export type SequenceUpdateToOneWithWhereWithoutRemindersInput = {
    where?: SequenceWhereInput
    data: XOR<SequenceUpdateWithoutRemindersInput, SequenceUncheckedUpdateWithoutRemindersInput>
  }

  export type SequenceUpdateWithoutRemindersInput = {
    id?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    account?: AccountUpdateOneRequiredWithoutSequencesNestedInput
    sequenceTemplate?: SequenceTemplateUpdateOneRequiredWithoutSequencesNestedInput
  }

  export type SequenceUncheckedUpdateWithoutRemindersInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    sequenceTemplateId?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustomerUpsertWithoutRemindersInput = {
    update: XOR<CustomerUpdateWithoutRemindersInput, CustomerUncheckedUpdateWithoutRemindersInput>
    create: XOR<CustomerCreateWithoutRemindersInput, CustomerUncheckedCreateWithoutRemindersInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutRemindersInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutRemindersInput, CustomerUncheckedUpdateWithoutRemindersInput>
  }

  export type CustomerUpdateWithoutRemindersInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneRequiredWithoutCustomersNestedInput
  }

  export type CustomerUncheckedUpdateWithoutRemindersInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUpsertWithoutRemindersInput = {
    update: XOR<AccountUpdateWithoutRemindersInput, AccountUncheckedUpdateWithoutRemindersInput>
    create: XOR<AccountCreateWithoutRemindersInput, AccountUncheckedCreateWithoutRemindersInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutRemindersInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutRemindersInput, AccountUncheckedUpdateWithoutRemindersInput>
  }

  export type AccountUpdateWithoutRemindersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templates?: TemplateUpdateManyWithoutAccountNestedInput
    sequenceTemplates?: SequenceTemplateUpdateManyWithoutAccountNestedInput
    customers?: CustomerUpdateManyWithoutAccountNestedInput
    sequences?: SequenceUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutRemindersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templates?: TemplateUncheckedUpdateManyWithoutAccountNestedInput
    sequenceTemplates?: SequenceTemplateUncheckedUpdateManyWithoutAccountNestedInput
    customers?: CustomerUncheckedUpdateManyWithoutAccountNestedInput
    sequences?: SequenceUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type TemplateUpsertWithoutRemindersInput = {
    update: XOR<TemplateUpdateWithoutRemindersInput, TemplateUncheckedUpdateWithoutRemindersInput>
    create: XOR<TemplateCreateWithoutRemindersInput, TemplateUncheckedCreateWithoutRemindersInput>
    where?: TemplateWhereInput
  }

  export type TemplateUpdateToOneWithWhereWithoutRemindersInput = {
    where?: TemplateWhereInput
    data: XOR<TemplateUpdateWithoutRemindersInput, TemplateUncheckedUpdateWithoutRemindersInput>
  }

  export type TemplateUpdateWithoutRemindersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    account?: AccountUpdateOneRequiredWithoutTemplatesNestedInput
    sequenceSteps?: SequenceStepUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateUncheckedUpdateWithoutRemindersInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sequenceSteps?: SequenceStepUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateCreateManyAccountInput = {
    id?: string
    name: string
    channel: string
    content: string
  }

  export type SequenceTemplateCreateManyAccountInput = {
    id?: string
    name: string
    cancelOnEvent?: string | null
    createdAt?: Date | string
  }

  export type CustomerCreateManyAccountInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    externalId: string
    createdAt?: Date | string
  }

  export type SequenceCreateManyAccountInput = {
    id?: string
    sequenceTemplateId: string
    startAt: Date | string
    cancelledAt?: Date | string | null
  }

  export type ReminderCreateManyAccountInput = {
    id?: string
    sequenceId: string
    customerId: string
    templateId: string
    channel: string
    sendAt: Date | string
    sentAt?: Date | string | null
    status: string
    jobId: string
  }

  export type TemplateUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sequenceSteps?: SequenceStepUpdateManyWithoutTemplateNestedInput
    reminders?: ReminderUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sequenceSteps?: SequenceStepUncheckedUpdateManyWithoutTemplateNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type SequenceTemplateUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cancelOnEvent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: SequenceStepUpdateManyWithoutSequenceTemplateNestedInput
    sequences?: SequenceUpdateManyWithoutSequenceTemplateNestedInput
  }

  export type SequenceTemplateUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cancelOnEvent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: SequenceStepUncheckedUpdateManyWithoutSequenceTemplateNestedInput
    sequences?: SequenceUncheckedUpdateManyWithoutSequenceTemplateNestedInput
  }

  export type SequenceTemplateUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cancelOnEvent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reminders?: ReminderUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reminders?: ReminderUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SequenceUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sequenceTemplate?: SequenceTemplateUpdateOneRequiredWithoutSequencesNestedInput
    reminders?: ReminderUpdateManyWithoutSequenceNestedInput
  }

  export type SequenceUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequenceTemplateId?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reminders?: ReminderUncheckedUpdateManyWithoutSequenceNestedInput
  }

  export type SequenceUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequenceTemplateId?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReminderUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    sendAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    sequence?: SequenceUpdateOneRequiredWithoutRemindersNestedInput
    customer?: CustomerUpdateOneRequiredWithoutRemindersNestedInput
    template?: TemplateUpdateOneRequiredWithoutRemindersNestedInput
  }

  export type ReminderUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequenceId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    sendAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
  }

  export type ReminderUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequenceId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    sendAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
  }

  export type ReminderCreateManyCustomerInput = {
    id?: string
    sequenceId: string
    accountId: string
    templateId: string
    channel: string
    sendAt: Date | string
    sentAt?: Date | string | null
    status: string
    jobId: string
  }

  export type ReminderUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    sendAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    sequence?: SequenceUpdateOneRequiredWithoutRemindersNestedInput
    account?: AccountUpdateOneRequiredWithoutRemindersNestedInput
    template?: TemplateUpdateOneRequiredWithoutRemindersNestedInput
  }

  export type ReminderUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequenceId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    sendAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
  }

  export type ReminderUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequenceId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    sendAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
  }

  export type SequenceStepCreateManyTemplateInput = {
    id?: string
    sequenceTemplateId: string
    order: number
    delayMinutes: number
    channel: string
  }

  export type ReminderCreateManyTemplateInput = {
    id?: string
    sequenceId: string
    customerId: string
    accountId: string
    channel: string
    sendAt: Date | string
    sentAt?: Date | string | null
    status: string
    jobId: string
  }

  export type SequenceStepUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    delayMinutes?: IntFieldUpdateOperationsInput | number
    channel?: StringFieldUpdateOperationsInput | string
    sequenceTemplate?: SequenceTemplateUpdateOneRequiredWithoutStepsNestedInput
  }

  export type SequenceStepUncheckedUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequenceTemplateId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    delayMinutes?: IntFieldUpdateOperationsInput | number
    channel?: StringFieldUpdateOperationsInput | string
  }

  export type SequenceStepUncheckedUpdateManyWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequenceTemplateId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    delayMinutes?: IntFieldUpdateOperationsInput | number
    channel?: StringFieldUpdateOperationsInput | string
  }

  export type ReminderUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    sendAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    sequence?: SequenceUpdateOneRequiredWithoutRemindersNestedInput
    customer?: CustomerUpdateOneRequiredWithoutRemindersNestedInput
    account?: AccountUpdateOneRequiredWithoutRemindersNestedInput
  }

  export type ReminderUncheckedUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequenceId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    sendAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
  }

  export type ReminderUncheckedUpdateManyWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequenceId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    sendAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
  }

  export type SequenceStepCreateManySequenceTemplateInput = {
    id?: string
    order: number
    delayMinutes: number
    channel: string
    templateId: string
  }

  export type SequenceCreateManySequenceTemplateInput = {
    id?: string
    accountId: string
    startAt: Date | string
    cancelledAt?: Date | string | null
  }

  export type SequenceStepUpdateWithoutSequenceTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    delayMinutes?: IntFieldUpdateOperationsInput | number
    channel?: StringFieldUpdateOperationsInput | string
    template?: TemplateUpdateOneRequiredWithoutSequenceStepsNestedInput
  }

  export type SequenceStepUncheckedUpdateWithoutSequenceTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    delayMinutes?: IntFieldUpdateOperationsInput | number
    channel?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
  }

  export type SequenceStepUncheckedUpdateManyWithoutSequenceTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    delayMinutes?: IntFieldUpdateOperationsInput | number
    channel?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
  }

  export type SequenceUpdateWithoutSequenceTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    account?: AccountUpdateOneRequiredWithoutSequencesNestedInput
    reminders?: ReminderUpdateManyWithoutSequenceNestedInput
  }

  export type SequenceUncheckedUpdateWithoutSequenceTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reminders?: ReminderUncheckedUpdateManyWithoutSequenceNestedInput
  }

  export type SequenceUncheckedUpdateManyWithoutSequenceTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReminderCreateManySequenceInput = {
    id?: string
    customerId: string
    accountId: string
    templateId: string
    channel: string
    sendAt: Date | string
    sentAt?: Date | string | null
    status: string
    jobId: string
  }

  export type ReminderUpdateWithoutSequenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    sendAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    customer?: CustomerUpdateOneRequiredWithoutRemindersNestedInput
    account?: AccountUpdateOneRequiredWithoutRemindersNestedInput
    template?: TemplateUpdateOneRequiredWithoutRemindersNestedInput
  }

  export type ReminderUncheckedUpdateWithoutSequenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    sendAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
  }

  export type ReminderUncheckedUpdateManyWithoutSequenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    sendAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
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