
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Pacote
 * 
 */
export type Pacote = $Result.DefaultSelection<Prisma.$PacotePayload>
/**
 * Model PacoteCnpj
 * 
 */
export type PacoteCnpj = $Result.DefaultSelection<Prisma.$PacoteCnpjPayload>
/**
 * Model PacoteHospital
 * 
 */
export type PacoteHospital = $Result.DefaultSelection<Prisma.$PacoteHospitalPayload>
/**
 * Model PacoteContemplacao
 * 
 */
export type PacoteContemplacao = $Result.DefaultSelection<Prisma.$PacoteContemplacaoPayload>
/**
 * Model PacoteAnexo
 * 
 */
export type PacoteAnexo = $Result.DefaultSelection<Prisma.$PacoteAnexoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  COLABORADOR: 'COLABORADOR'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pacote`: Exposes CRUD operations for the **Pacote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pacotes
    * const pacotes = await prisma.pacote.findMany()
    * ```
    */
  get pacote(): Prisma.PacoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pacoteCnpj`: Exposes CRUD operations for the **PacoteCnpj** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PacoteCnpjs
    * const pacoteCnpjs = await prisma.pacoteCnpj.findMany()
    * ```
    */
  get pacoteCnpj(): Prisma.PacoteCnpjDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pacoteHospital`: Exposes CRUD operations for the **PacoteHospital** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PacoteHospitals
    * const pacoteHospitals = await prisma.pacoteHospital.findMany()
    * ```
    */
  get pacoteHospital(): Prisma.PacoteHospitalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pacoteContemplacao`: Exposes CRUD operations for the **PacoteContemplacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PacoteContemplacaos
    * const pacoteContemplacaos = await prisma.pacoteContemplacao.findMany()
    * ```
    */
  get pacoteContemplacao(): Prisma.PacoteContemplacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pacoteAnexo`: Exposes CRUD operations for the **PacoteAnexo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PacoteAnexos
    * const pacoteAnexos = await prisma.pacoteAnexo.findMany()
    * ```
    */
  get pacoteAnexo(): Prisma.PacoteAnexoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.7.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
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
    User: 'User',
    Pacote: 'Pacote',
    PacoteCnpj: 'PacoteCnpj',
    PacoteHospital: 'PacoteHospital',
    PacoteContemplacao: 'PacoteContemplacao',
    PacoteAnexo: 'PacoteAnexo'
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
      modelProps: "user" | "pacote" | "pacoteCnpj" | "pacoteHospital" | "pacoteContemplacao" | "pacoteAnexo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Pacote: {
        payload: Prisma.$PacotePayload<ExtArgs>
        fields: Prisma.PacoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PacoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PacoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacotePayload>
          }
          findFirst: {
            args: Prisma.PacoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PacoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacotePayload>
          }
          findMany: {
            args: Prisma.PacoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacotePayload>[]
          }
          create: {
            args: Prisma.PacoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacotePayload>
          }
          createMany: {
            args: Prisma.PacoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PacoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacotePayload>[]
          }
          delete: {
            args: Prisma.PacoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacotePayload>
          }
          update: {
            args: Prisma.PacoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacotePayload>
          }
          deleteMany: {
            args: Prisma.PacoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PacoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PacoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacotePayload>[]
          }
          upsert: {
            args: Prisma.PacoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacotePayload>
          }
          aggregate: {
            args: Prisma.PacoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePacote>
          }
          groupBy: {
            args: Prisma.PacoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<PacoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.PacoteCountArgs<ExtArgs>
            result: $Utils.Optional<PacoteCountAggregateOutputType> | number
          }
        }
      }
      PacoteCnpj: {
        payload: Prisma.$PacoteCnpjPayload<ExtArgs>
        fields: Prisma.PacoteCnpjFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PacoteCnpjFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacoteCnpjPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PacoteCnpjFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacoteCnpjPayload>
          }
          findFirst: {
            args: Prisma.PacoteCnpjFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacoteCnpjPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PacoteCnpjFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacoteCnpjPayload>
          }
          findMany: {
            args: Prisma.PacoteCnpjFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacoteCnpjPayload>[]
          }
          create: {
            args: Prisma.PacoteCnpjCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacoteCnpjPayload>
          }
          createMany: {
            args: Prisma.PacoteCnpjCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PacoteCnpjCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacoteCnpjPayload>[]
          }
          delete: {
            args: Prisma.PacoteCnpjDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacoteCnpjPayload>
          }
          update: {
            args: Prisma.PacoteCnpjUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacoteCnpjPayload>
          }
          deleteMany: {
            args: Prisma.PacoteCnpjDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PacoteCnpjUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PacoteCnpjUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacoteCnpjPayload>[]
          }
          upsert: {
            args: Prisma.PacoteCnpjUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacoteCnpjPayload>
          }
          aggregate: {
            args: Prisma.PacoteCnpjAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePacoteCnpj>
          }
          groupBy: {
            args: Prisma.PacoteCnpjGroupByArgs<ExtArgs>
            result: $Utils.Optional<PacoteCnpjGroupByOutputType>[]
          }
          count: {
            args: Prisma.PacoteCnpjCountArgs<ExtArgs>
            result: $Utils.Optional<PacoteCnpjCountAggregateOutputType> | number
          }
        }
      }
      PacoteHospital: {
        payload: Prisma.$PacoteHospitalPayload<ExtArgs>
        fields: Prisma.PacoteHospitalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PacoteHospitalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacoteHospitalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PacoteHospitalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacoteHospitalPayload>
          }
          findFirst: {
            args: Prisma.PacoteHospitalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacoteHospitalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PacoteHospitalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacoteHospitalPayload>
          }
          findMany: {
            args: Prisma.PacoteHospitalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacoteHospitalPayload>[]
          }
          create: {
            args: Prisma.PacoteHospitalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacoteHospitalPayload>
          }
          createMany: {
            args: Prisma.PacoteHospitalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PacoteHospitalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacoteHospitalPayload>[]
          }
          delete: {
            args: Prisma.PacoteHospitalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacoteHospitalPayload>
          }
          update: {
            args: Prisma.PacoteHospitalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacoteHospitalPayload>
          }
          deleteMany: {
            args: Prisma.PacoteHospitalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PacoteHospitalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PacoteHospitalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacoteHospitalPayload>[]
          }
          upsert: {
            args: Prisma.PacoteHospitalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacoteHospitalPayload>
          }
          aggregate: {
            args: Prisma.PacoteHospitalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePacoteHospital>
          }
          groupBy: {
            args: Prisma.PacoteHospitalGroupByArgs<ExtArgs>
            result: $Utils.Optional<PacoteHospitalGroupByOutputType>[]
          }
          count: {
            args: Prisma.PacoteHospitalCountArgs<ExtArgs>
            result: $Utils.Optional<PacoteHospitalCountAggregateOutputType> | number
          }
        }
      }
      PacoteContemplacao: {
        payload: Prisma.$PacoteContemplacaoPayload<ExtArgs>
        fields: Prisma.PacoteContemplacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PacoteContemplacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacoteContemplacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PacoteContemplacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacoteContemplacaoPayload>
          }
          findFirst: {
            args: Prisma.PacoteContemplacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacoteContemplacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PacoteContemplacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacoteContemplacaoPayload>
          }
          findMany: {
            args: Prisma.PacoteContemplacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacoteContemplacaoPayload>[]
          }
          create: {
            args: Prisma.PacoteContemplacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacoteContemplacaoPayload>
          }
          createMany: {
            args: Prisma.PacoteContemplacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PacoteContemplacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacoteContemplacaoPayload>[]
          }
          delete: {
            args: Prisma.PacoteContemplacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacoteContemplacaoPayload>
          }
          update: {
            args: Prisma.PacoteContemplacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacoteContemplacaoPayload>
          }
          deleteMany: {
            args: Prisma.PacoteContemplacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PacoteContemplacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PacoteContemplacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacoteContemplacaoPayload>[]
          }
          upsert: {
            args: Prisma.PacoteContemplacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacoteContemplacaoPayload>
          }
          aggregate: {
            args: Prisma.PacoteContemplacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePacoteContemplacao>
          }
          groupBy: {
            args: Prisma.PacoteContemplacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PacoteContemplacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PacoteContemplacaoCountArgs<ExtArgs>
            result: $Utils.Optional<PacoteContemplacaoCountAggregateOutputType> | number
          }
        }
      }
      PacoteAnexo: {
        payload: Prisma.$PacoteAnexoPayload<ExtArgs>
        fields: Prisma.PacoteAnexoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PacoteAnexoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacoteAnexoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PacoteAnexoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacoteAnexoPayload>
          }
          findFirst: {
            args: Prisma.PacoteAnexoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacoteAnexoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PacoteAnexoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacoteAnexoPayload>
          }
          findMany: {
            args: Prisma.PacoteAnexoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacoteAnexoPayload>[]
          }
          create: {
            args: Prisma.PacoteAnexoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacoteAnexoPayload>
          }
          createMany: {
            args: Prisma.PacoteAnexoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PacoteAnexoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacoteAnexoPayload>[]
          }
          delete: {
            args: Prisma.PacoteAnexoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacoteAnexoPayload>
          }
          update: {
            args: Prisma.PacoteAnexoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacoteAnexoPayload>
          }
          deleteMany: {
            args: Prisma.PacoteAnexoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PacoteAnexoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PacoteAnexoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacoteAnexoPayload>[]
          }
          upsert: {
            args: Prisma.PacoteAnexoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacoteAnexoPayload>
          }
          aggregate: {
            args: Prisma.PacoteAnexoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePacoteAnexo>
          }
          groupBy: {
            args: Prisma.PacoteAnexoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PacoteAnexoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PacoteAnexoCountArgs<ExtArgs>
            result: $Utils.Optional<PacoteAnexoCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
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
    user?: UserOmit
    pacote?: PacoteOmit
    pacoteCnpj?: PacoteCnpjOmit
    pacoteHospital?: PacoteHospitalOmit
    pacoteContemplacao?: PacoteContemplacaoOmit
    pacoteAnexo?: PacoteAnexoOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    pacotesCriados: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacotesCriados?: boolean | UserCountOutputTypeCountPacotesCriadosArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPacotesCriadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PacoteWhereInput
  }


  /**
   * Count Type PacoteCountOutputType
   */

  export type PacoteCountOutputType = {
    cnpjs: number
    hospitais: number
    contemplacoes: number
    anexos: number
  }

  export type PacoteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cnpjs?: boolean | PacoteCountOutputTypeCountCnpjsArgs
    hospitais?: boolean | PacoteCountOutputTypeCountHospitaisArgs
    contemplacoes?: boolean | PacoteCountOutputTypeCountContemplacoesArgs
    anexos?: boolean | PacoteCountOutputTypeCountAnexosArgs
  }

  // Custom InputTypes
  /**
   * PacoteCountOutputType without action
   */
  export type PacoteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacoteCountOutputType
     */
    select?: PacoteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PacoteCountOutputType without action
   */
  export type PacoteCountOutputTypeCountCnpjsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PacoteCnpjWhereInput
  }

  /**
   * PacoteCountOutputType without action
   */
  export type PacoteCountOutputTypeCountHospitaisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PacoteHospitalWhereInput
  }

  /**
   * PacoteCountOutputType without action
   */
  export type PacoteCountOutputTypeCountContemplacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PacoteContemplacaoWhereInput
  }

  /**
   * PacoteCountOutputType without action
   */
  export type PacoteCountOutputTypeCountAnexosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PacoteAnexoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    name: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pacotesCriados?: boolean | User$pacotesCriadosArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "name" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacotesCriados?: boolean | User$pacotesCriadosArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      pacotesCriados: Prisma.$PacotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      name: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pacotesCriados<T extends User$pacotesCriadosArgs<ExtArgs> = {}>(args?: Subset<T, User$pacotesCriadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.pacotesCriados
   */
  export type User$pacotesCriadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pacote
     */
    select?: PacoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pacote
     */
    omit?: PacoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteInclude<ExtArgs> | null
    where?: PacoteWhereInput
    orderBy?: PacoteOrderByWithRelationInput | PacoteOrderByWithRelationInput[]
    cursor?: PacoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PacoteScalarFieldEnum | PacoteScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Pacote
   */

  export type AggregatePacote = {
    _count: PacoteCountAggregateOutputType | null
    _min: PacoteMinAggregateOutputType | null
    _max: PacoteMaxAggregateOutputType | null
  }

  export type PacoteMinAggregateOutputType = {
    id: string | null
    nomePacote: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type PacoteMaxAggregateOutputType = {
    id: string | null
    nomePacote: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type PacoteCountAggregateOutputType = {
    id: number
    nomePacote: number
    createdAt: number
    updatedAt: number
    createdById: number
    _all: number
  }


  export type PacoteMinAggregateInputType = {
    id?: true
    nomePacote?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type PacoteMaxAggregateInputType = {
    id?: true
    nomePacote?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type PacoteCountAggregateInputType = {
    id?: true
    nomePacote?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    _all?: true
  }

  export type PacoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pacote to aggregate.
     */
    where?: PacoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacotes to fetch.
     */
    orderBy?: PacoteOrderByWithRelationInput | PacoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PacoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pacotes
    **/
    _count?: true | PacoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PacoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PacoteMaxAggregateInputType
  }

  export type GetPacoteAggregateType<T extends PacoteAggregateArgs> = {
        [P in keyof T & keyof AggregatePacote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePacote[P]>
      : GetScalarType<T[P], AggregatePacote[P]>
  }




  export type PacoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PacoteWhereInput
    orderBy?: PacoteOrderByWithAggregationInput | PacoteOrderByWithAggregationInput[]
    by: PacoteScalarFieldEnum[] | PacoteScalarFieldEnum
    having?: PacoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PacoteCountAggregateInputType | true
    _min?: PacoteMinAggregateInputType
    _max?: PacoteMaxAggregateInputType
  }

  export type PacoteGroupByOutputType = {
    id: string
    nomePacote: string
    createdAt: Date
    updatedAt: Date
    createdById: string
    _count: PacoteCountAggregateOutputType | null
    _min: PacoteMinAggregateOutputType | null
    _max: PacoteMaxAggregateOutputType | null
  }

  type GetPacoteGroupByPayload<T extends PacoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PacoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PacoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PacoteGroupByOutputType[P]>
            : GetScalarType<T[P], PacoteGroupByOutputType[P]>
        }
      >
    >


  export type PacoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomePacote?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    cnpjs?: boolean | Pacote$cnpjsArgs<ExtArgs>
    hospitais?: boolean | Pacote$hospitaisArgs<ExtArgs>
    contemplacoes?: boolean | Pacote$contemplacoesArgs<ExtArgs>
    anexos?: boolean | Pacote$anexosArgs<ExtArgs>
    _count?: boolean | PacoteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pacote"]>

  export type PacoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomePacote?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pacote"]>

  export type PacoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomePacote?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pacote"]>

  export type PacoteSelectScalar = {
    id?: boolean
    nomePacote?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
  }

  export type PacoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nomePacote" | "createdAt" | "updatedAt" | "createdById", ExtArgs["result"]["pacote"]>
  export type PacoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    cnpjs?: boolean | Pacote$cnpjsArgs<ExtArgs>
    hospitais?: boolean | Pacote$hospitaisArgs<ExtArgs>
    contemplacoes?: boolean | Pacote$contemplacoesArgs<ExtArgs>
    anexos?: boolean | Pacote$anexosArgs<ExtArgs>
    _count?: boolean | PacoteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PacoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PacoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PacotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pacote"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      cnpjs: Prisma.$PacoteCnpjPayload<ExtArgs>[]
      hospitais: Prisma.$PacoteHospitalPayload<ExtArgs>[]
      contemplacoes: Prisma.$PacoteContemplacaoPayload<ExtArgs>[]
      anexos: Prisma.$PacoteAnexoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nomePacote: string
      createdAt: Date
      updatedAt: Date
      createdById: string
    }, ExtArgs["result"]["pacote"]>
    composites: {}
  }

  type PacoteGetPayload<S extends boolean | null | undefined | PacoteDefaultArgs> = $Result.GetResult<Prisma.$PacotePayload, S>

  type PacoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PacoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PacoteCountAggregateInputType | true
    }

  export interface PacoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pacote'], meta: { name: 'Pacote' } }
    /**
     * Find zero or one Pacote that matches the filter.
     * @param {PacoteFindUniqueArgs} args - Arguments to find a Pacote
     * @example
     * // Get one Pacote
     * const pacote = await prisma.pacote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PacoteFindUniqueArgs>(args: SelectSubset<T, PacoteFindUniqueArgs<ExtArgs>>): Prisma__PacoteClient<$Result.GetResult<Prisma.$PacotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pacote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PacoteFindUniqueOrThrowArgs} args - Arguments to find a Pacote
     * @example
     * // Get one Pacote
     * const pacote = await prisma.pacote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PacoteFindUniqueOrThrowArgs>(args: SelectSubset<T, PacoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PacoteClient<$Result.GetResult<Prisma.$PacotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pacote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacoteFindFirstArgs} args - Arguments to find a Pacote
     * @example
     * // Get one Pacote
     * const pacote = await prisma.pacote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PacoteFindFirstArgs>(args?: SelectSubset<T, PacoteFindFirstArgs<ExtArgs>>): Prisma__PacoteClient<$Result.GetResult<Prisma.$PacotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pacote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacoteFindFirstOrThrowArgs} args - Arguments to find a Pacote
     * @example
     * // Get one Pacote
     * const pacote = await prisma.pacote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PacoteFindFirstOrThrowArgs>(args?: SelectSubset<T, PacoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__PacoteClient<$Result.GetResult<Prisma.$PacotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pacotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pacotes
     * const pacotes = await prisma.pacote.findMany()
     * 
     * // Get first 10 Pacotes
     * const pacotes = await prisma.pacote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pacoteWithIdOnly = await prisma.pacote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PacoteFindManyArgs>(args?: SelectSubset<T, PacoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pacote.
     * @param {PacoteCreateArgs} args - Arguments to create a Pacote.
     * @example
     * // Create one Pacote
     * const Pacote = await prisma.pacote.create({
     *   data: {
     *     // ... data to create a Pacote
     *   }
     * })
     * 
     */
    create<T extends PacoteCreateArgs>(args: SelectSubset<T, PacoteCreateArgs<ExtArgs>>): Prisma__PacoteClient<$Result.GetResult<Prisma.$PacotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pacotes.
     * @param {PacoteCreateManyArgs} args - Arguments to create many Pacotes.
     * @example
     * // Create many Pacotes
     * const pacote = await prisma.pacote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PacoteCreateManyArgs>(args?: SelectSubset<T, PacoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pacotes and returns the data saved in the database.
     * @param {PacoteCreateManyAndReturnArgs} args - Arguments to create many Pacotes.
     * @example
     * // Create many Pacotes
     * const pacote = await prisma.pacote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pacotes and only return the `id`
     * const pacoteWithIdOnly = await prisma.pacote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PacoteCreateManyAndReturnArgs>(args?: SelectSubset<T, PacoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pacote.
     * @param {PacoteDeleteArgs} args - Arguments to delete one Pacote.
     * @example
     * // Delete one Pacote
     * const Pacote = await prisma.pacote.delete({
     *   where: {
     *     // ... filter to delete one Pacote
     *   }
     * })
     * 
     */
    delete<T extends PacoteDeleteArgs>(args: SelectSubset<T, PacoteDeleteArgs<ExtArgs>>): Prisma__PacoteClient<$Result.GetResult<Prisma.$PacotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pacote.
     * @param {PacoteUpdateArgs} args - Arguments to update one Pacote.
     * @example
     * // Update one Pacote
     * const pacote = await prisma.pacote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PacoteUpdateArgs>(args: SelectSubset<T, PacoteUpdateArgs<ExtArgs>>): Prisma__PacoteClient<$Result.GetResult<Prisma.$PacotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pacotes.
     * @param {PacoteDeleteManyArgs} args - Arguments to filter Pacotes to delete.
     * @example
     * // Delete a few Pacotes
     * const { count } = await prisma.pacote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PacoteDeleteManyArgs>(args?: SelectSubset<T, PacoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pacotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pacotes
     * const pacote = await prisma.pacote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PacoteUpdateManyArgs>(args: SelectSubset<T, PacoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pacotes and returns the data updated in the database.
     * @param {PacoteUpdateManyAndReturnArgs} args - Arguments to update many Pacotes.
     * @example
     * // Update many Pacotes
     * const pacote = await prisma.pacote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pacotes and only return the `id`
     * const pacoteWithIdOnly = await prisma.pacote.updateManyAndReturn({
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
    updateManyAndReturn<T extends PacoteUpdateManyAndReturnArgs>(args: SelectSubset<T, PacoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pacote.
     * @param {PacoteUpsertArgs} args - Arguments to update or create a Pacote.
     * @example
     * // Update or create a Pacote
     * const pacote = await prisma.pacote.upsert({
     *   create: {
     *     // ... data to create a Pacote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pacote we want to update
     *   }
     * })
     */
    upsert<T extends PacoteUpsertArgs>(args: SelectSubset<T, PacoteUpsertArgs<ExtArgs>>): Prisma__PacoteClient<$Result.GetResult<Prisma.$PacotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pacotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacoteCountArgs} args - Arguments to filter Pacotes to count.
     * @example
     * // Count the number of Pacotes
     * const count = await prisma.pacote.count({
     *   where: {
     *     // ... the filter for the Pacotes we want to count
     *   }
     * })
    **/
    count<T extends PacoteCountArgs>(
      args?: Subset<T, PacoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PacoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pacote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PacoteAggregateArgs>(args: Subset<T, PacoteAggregateArgs>): Prisma.PrismaPromise<GetPacoteAggregateType<T>>

    /**
     * Group by Pacote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacoteGroupByArgs} args - Group by arguments.
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
      T extends PacoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PacoteGroupByArgs['orderBy'] }
        : { orderBy?: PacoteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PacoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPacoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pacote model
   */
  readonly fields: PacoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pacote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PacoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cnpjs<T extends Pacote$cnpjsArgs<ExtArgs> = {}>(args?: Subset<T, Pacote$cnpjsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacoteCnpjPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    hospitais<T extends Pacote$hospitaisArgs<ExtArgs> = {}>(args?: Subset<T, Pacote$hospitaisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacoteHospitalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contemplacoes<T extends Pacote$contemplacoesArgs<ExtArgs> = {}>(args?: Subset<T, Pacote$contemplacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacoteContemplacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    anexos<T extends Pacote$anexosArgs<ExtArgs> = {}>(args?: Subset<T, Pacote$anexosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacoteAnexoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Pacote model
   */
  interface PacoteFieldRefs {
    readonly id: FieldRef<"Pacote", 'String'>
    readonly nomePacote: FieldRef<"Pacote", 'String'>
    readonly createdAt: FieldRef<"Pacote", 'DateTime'>
    readonly updatedAt: FieldRef<"Pacote", 'DateTime'>
    readonly createdById: FieldRef<"Pacote", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Pacote findUnique
   */
  export type PacoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pacote
     */
    select?: PacoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pacote
     */
    omit?: PacoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteInclude<ExtArgs> | null
    /**
     * Filter, which Pacote to fetch.
     */
    where: PacoteWhereUniqueInput
  }

  /**
   * Pacote findUniqueOrThrow
   */
  export type PacoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pacote
     */
    select?: PacoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pacote
     */
    omit?: PacoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteInclude<ExtArgs> | null
    /**
     * Filter, which Pacote to fetch.
     */
    where: PacoteWhereUniqueInput
  }

  /**
   * Pacote findFirst
   */
  export type PacoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pacote
     */
    select?: PacoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pacote
     */
    omit?: PacoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteInclude<ExtArgs> | null
    /**
     * Filter, which Pacote to fetch.
     */
    where?: PacoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacotes to fetch.
     */
    orderBy?: PacoteOrderByWithRelationInput | PacoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pacotes.
     */
    cursor?: PacoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pacotes.
     */
    distinct?: PacoteScalarFieldEnum | PacoteScalarFieldEnum[]
  }

  /**
   * Pacote findFirstOrThrow
   */
  export type PacoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pacote
     */
    select?: PacoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pacote
     */
    omit?: PacoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteInclude<ExtArgs> | null
    /**
     * Filter, which Pacote to fetch.
     */
    where?: PacoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacotes to fetch.
     */
    orderBy?: PacoteOrderByWithRelationInput | PacoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pacotes.
     */
    cursor?: PacoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pacotes.
     */
    distinct?: PacoteScalarFieldEnum | PacoteScalarFieldEnum[]
  }

  /**
   * Pacote findMany
   */
  export type PacoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pacote
     */
    select?: PacoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pacote
     */
    omit?: PacoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteInclude<ExtArgs> | null
    /**
     * Filter, which Pacotes to fetch.
     */
    where?: PacoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacotes to fetch.
     */
    orderBy?: PacoteOrderByWithRelationInput | PacoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pacotes.
     */
    cursor?: PacoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pacotes.
     */
    distinct?: PacoteScalarFieldEnum | PacoteScalarFieldEnum[]
  }

  /**
   * Pacote create
   */
  export type PacoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pacote
     */
    select?: PacoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pacote
     */
    omit?: PacoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteInclude<ExtArgs> | null
    /**
     * The data needed to create a Pacote.
     */
    data: XOR<PacoteCreateInput, PacoteUncheckedCreateInput>
  }

  /**
   * Pacote createMany
   */
  export type PacoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pacotes.
     */
    data: PacoteCreateManyInput | PacoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pacote createManyAndReturn
   */
  export type PacoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pacote
     */
    select?: PacoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pacote
     */
    omit?: PacoteOmit<ExtArgs> | null
    /**
     * The data used to create many Pacotes.
     */
    data: PacoteCreateManyInput | PacoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pacote update
   */
  export type PacoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pacote
     */
    select?: PacoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pacote
     */
    omit?: PacoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteInclude<ExtArgs> | null
    /**
     * The data needed to update a Pacote.
     */
    data: XOR<PacoteUpdateInput, PacoteUncheckedUpdateInput>
    /**
     * Choose, which Pacote to update.
     */
    where: PacoteWhereUniqueInput
  }

  /**
   * Pacote updateMany
   */
  export type PacoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pacotes.
     */
    data: XOR<PacoteUpdateManyMutationInput, PacoteUncheckedUpdateManyInput>
    /**
     * Filter which Pacotes to update
     */
    where?: PacoteWhereInput
    /**
     * Limit how many Pacotes to update.
     */
    limit?: number
  }

  /**
   * Pacote updateManyAndReturn
   */
  export type PacoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pacote
     */
    select?: PacoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pacote
     */
    omit?: PacoteOmit<ExtArgs> | null
    /**
     * The data used to update Pacotes.
     */
    data: XOR<PacoteUpdateManyMutationInput, PacoteUncheckedUpdateManyInput>
    /**
     * Filter which Pacotes to update
     */
    where?: PacoteWhereInput
    /**
     * Limit how many Pacotes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pacote upsert
   */
  export type PacoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pacote
     */
    select?: PacoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pacote
     */
    omit?: PacoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteInclude<ExtArgs> | null
    /**
     * The filter to search for the Pacote to update in case it exists.
     */
    where: PacoteWhereUniqueInput
    /**
     * In case the Pacote found by the `where` argument doesn't exist, create a new Pacote with this data.
     */
    create: XOR<PacoteCreateInput, PacoteUncheckedCreateInput>
    /**
     * In case the Pacote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PacoteUpdateInput, PacoteUncheckedUpdateInput>
  }

  /**
   * Pacote delete
   */
  export type PacoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pacote
     */
    select?: PacoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pacote
     */
    omit?: PacoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteInclude<ExtArgs> | null
    /**
     * Filter which Pacote to delete.
     */
    where: PacoteWhereUniqueInput
  }

  /**
   * Pacote deleteMany
   */
  export type PacoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pacotes to delete
     */
    where?: PacoteWhereInput
    /**
     * Limit how many Pacotes to delete.
     */
    limit?: number
  }

  /**
   * Pacote.cnpjs
   */
  export type Pacote$cnpjsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacoteCnpj
     */
    select?: PacoteCnpjSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacoteCnpj
     */
    omit?: PacoteCnpjOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteCnpjInclude<ExtArgs> | null
    where?: PacoteCnpjWhereInput
    orderBy?: PacoteCnpjOrderByWithRelationInput | PacoteCnpjOrderByWithRelationInput[]
    cursor?: PacoteCnpjWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PacoteCnpjScalarFieldEnum | PacoteCnpjScalarFieldEnum[]
  }

  /**
   * Pacote.hospitais
   */
  export type Pacote$hospitaisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacoteHospital
     */
    select?: PacoteHospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacoteHospital
     */
    omit?: PacoteHospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteHospitalInclude<ExtArgs> | null
    where?: PacoteHospitalWhereInput
    orderBy?: PacoteHospitalOrderByWithRelationInput | PacoteHospitalOrderByWithRelationInput[]
    cursor?: PacoteHospitalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PacoteHospitalScalarFieldEnum | PacoteHospitalScalarFieldEnum[]
  }

  /**
   * Pacote.contemplacoes
   */
  export type Pacote$contemplacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacoteContemplacao
     */
    select?: PacoteContemplacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacoteContemplacao
     */
    omit?: PacoteContemplacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteContemplacaoInclude<ExtArgs> | null
    where?: PacoteContemplacaoWhereInput
    orderBy?: PacoteContemplacaoOrderByWithRelationInput | PacoteContemplacaoOrderByWithRelationInput[]
    cursor?: PacoteContemplacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PacoteContemplacaoScalarFieldEnum | PacoteContemplacaoScalarFieldEnum[]
  }

  /**
   * Pacote.anexos
   */
  export type Pacote$anexosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacoteAnexo
     */
    select?: PacoteAnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacoteAnexo
     */
    omit?: PacoteAnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteAnexoInclude<ExtArgs> | null
    where?: PacoteAnexoWhereInput
    orderBy?: PacoteAnexoOrderByWithRelationInput | PacoteAnexoOrderByWithRelationInput[]
    cursor?: PacoteAnexoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PacoteAnexoScalarFieldEnum | PacoteAnexoScalarFieldEnum[]
  }

  /**
   * Pacote without action
   */
  export type PacoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pacote
     */
    select?: PacoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pacote
     */
    omit?: PacoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteInclude<ExtArgs> | null
  }


  /**
   * Model PacoteCnpj
   */

  export type AggregatePacoteCnpj = {
    _count: PacoteCnpjCountAggregateOutputType | null
    _min: PacoteCnpjMinAggregateOutputType | null
    _max: PacoteCnpjMaxAggregateOutputType | null
  }

  export type PacoteCnpjMinAggregateOutputType = {
    id: string | null
    cnpj: string | null
    pacoteId: string | null
  }

  export type PacoteCnpjMaxAggregateOutputType = {
    id: string | null
    cnpj: string | null
    pacoteId: string | null
  }

  export type PacoteCnpjCountAggregateOutputType = {
    id: number
    cnpj: number
    pacoteId: number
    _all: number
  }


  export type PacoteCnpjMinAggregateInputType = {
    id?: true
    cnpj?: true
    pacoteId?: true
  }

  export type PacoteCnpjMaxAggregateInputType = {
    id?: true
    cnpj?: true
    pacoteId?: true
  }

  export type PacoteCnpjCountAggregateInputType = {
    id?: true
    cnpj?: true
    pacoteId?: true
    _all?: true
  }

  export type PacoteCnpjAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PacoteCnpj to aggregate.
     */
    where?: PacoteCnpjWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PacoteCnpjs to fetch.
     */
    orderBy?: PacoteCnpjOrderByWithRelationInput | PacoteCnpjOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PacoteCnpjWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PacoteCnpjs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PacoteCnpjs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PacoteCnpjs
    **/
    _count?: true | PacoteCnpjCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PacoteCnpjMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PacoteCnpjMaxAggregateInputType
  }

  export type GetPacoteCnpjAggregateType<T extends PacoteCnpjAggregateArgs> = {
        [P in keyof T & keyof AggregatePacoteCnpj]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePacoteCnpj[P]>
      : GetScalarType<T[P], AggregatePacoteCnpj[P]>
  }




  export type PacoteCnpjGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PacoteCnpjWhereInput
    orderBy?: PacoteCnpjOrderByWithAggregationInput | PacoteCnpjOrderByWithAggregationInput[]
    by: PacoteCnpjScalarFieldEnum[] | PacoteCnpjScalarFieldEnum
    having?: PacoteCnpjScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PacoteCnpjCountAggregateInputType | true
    _min?: PacoteCnpjMinAggregateInputType
    _max?: PacoteCnpjMaxAggregateInputType
  }

  export type PacoteCnpjGroupByOutputType = {
    id: string
    cnpj: string
    pacoteId: string
    _count: PacoteCnpjCountAggregateOutputType | null
    _min: PacoteCnpjMinAggregateOutputType | null
    _max: PacoteCnpjMaxAggregateOutputType | null
  }

  type GetPacoteCnpjGroupByPayload<T extends PacoteCnpjGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PacoteCnpjGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PacoteCnpjGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PacoteCnpjGroupByOutputType[P]>
            : GetScalarType<T[P], PacoteCnpjGroupByOutputType[P]>
        }
      >
    >


  export type PacoteCnpjSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cnpj?: boolean
    pacoteId?: boolean
    pacote?: boolean | PacoteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pacoteCnpj"]>

  export type PacoteCnpjSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cnpj?: boolean
    pacoteId?: boolean
    pacote?: boolean | PacoteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pacoteCnpj"]>

  export type PacoteCnpjSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cnpj?: boolean
    pacoteId?: boolean
    pacote?: boolean | PacoteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pacoteCnpj"]>

  export type PacoteCnpjSelectScalar = {
    id?: boolean
    cnpj?: boolean
    pacoteId?: boolean
  }

  export type PacoteCnpjOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cnpj" | "pacoteId", ExtArgs["result"]["pacoteCnpj"]>
  export type PacoteCnpjInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacote?: boolean | PacoteDefaultArgs<ExtArgs>
  }
  export type PacoteCnpjIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacote?: boolean | PacoteDefaultArgs<ExtArgs>
  }
  export type PacoteCnpjIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacote?: boolean | PacoteDefaultArgs<ExtArgs>
  }

  export type $PacoteCnpjPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PacoteCnpj"
    objects: {
      pacote: Prisma.$PacotePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cnpj: string
      pacoteId: string
    }, ExtArgs["result"]["pacoteCnpj"]>
    composites: {}
  }

  type PacoteCnpjGetPayload<S extends boolean | null | undefined | PacoteCnpjDefaultArgs> = $Result.GetResult<Prisma.$PacoteCnpjPayload, S>

  type PacoteCnpjCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PacoteCnpjFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PacoteCnpjCountAggregateInputType | true
    }

  export interface PacoteCnpjDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PacoteCnpj'], meta: { name: 'PacoteCnpj' } }
    /**
     * Find zero or one PacoteCnpj that matches the filter.
     * @param {PacoteCnpjFindUniqueArgs} args - Arguments to find a PacoteCnpj
     * @example
     * // Get one PacoteCnpj
     * const pacoteCnpj = await prisma.pacoteCnpj.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PacoteCnpjFindUniqueArgs>(args: SelectSubset<T, PacoteCnpjFindUniqueArgs<ExtArgs>>): Prisma__PacoteCnpjClient<$Result.GetResult<Prisma.$PacoteCnpjPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PacoteCnpj that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PacoteCnpjFindUniqueOrThrowArgs} args - Arguments to find a PacoteCnpj
     * @example
     * // Get one PacoteCnpj
     * const pacoteCnpj = await prisma.pacoteCnpj.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PacoteCnpjFindUniqueOrThrowArgs>(args: SelectSubset<T, PacoteCnpjFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PacoteCnpjClient<$Result.GetResult<Prisma.$PacoteCnpjPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PacoteCnpj that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacoteCnpjFindFirstArgs} args - Arguments to find a PacoteCnpj
     * @example
     * // Get one PacoteCnpj
     * const pacoteCnpj = await prisma.pacoteCnpj.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PacoteCnpjFindFirstArgs>(args?: SelectSubset<T, PacoteCnpjFindFirstArgs<ExtArgs>>): Prisma__PacoteCnpjClient<$Result.GetResult<Prisma.$PacoteCnpjPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PacoteCnpj that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacoteCnpjFindFirstOrThrowArgs} args - Arguments to find a PacoteCnpj
     * @example
     * // Get one PacoteCnpj
     * const pacoteCnpj = await prisma.pacoteCnpj.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PacoteCnpjFindFirstOrThrowArgs>(args?: SelectSubset<T, PacoteCnpjFindFirstOrThrowArgs<ExtArgs>>): Prisma__PacoteCnpjClient<$Result.GetResult<Prisma.$PacoteCnpjPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PacoteCnpjs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacoteCnpjFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PacoteCnpjs
     * const pacoteCnpjs = await prisma.pacoteCnpj.findMany()
     * 
     * // Get first 10 PacoteCnpjs
     * const pacoteCnpjs = await prisma.pacoteCnpj.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pacoteCnpjWithIdOnly = await prisma.pacoteCnpj.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PacoteCnpjFindManyArgs>(args?: SelectSubset<T, PacoteCnpjFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacoteCnpjPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PacoteCnpj.
     * @param {PacoteCnpjCreateArgs} args - Arguments to create a PacoteCnpj.
     * @example
     * // Create one PacoteCnpj
     * const PacoteCnpj = await prisma.pacoteCnpj.create({
     *   data: {
     *     // ... data to create a PacoteCnpj
     *   }
     * })
     * 
     */
    create<T extends PacoteCnpjCreateArgs>(args: SelectSubset<T, PacoteCnpjCreateArgs<ExtArgs>>): Prisma__PacoteCnpjClient<$Result.GetResult<Prisma.$PacoteCnpjPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PacoteCnpjs.
     * @param {PacoteCnpjCreateManyArgs} args - Arguments to create many PacoteCnpjs.
     * @example
     * // Create many PacoteCnpjs
     * const pacoteCnpj = await prisma.pacoteCnpj.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PacoteCnpjCreateManyArgs>(args?: SelectSubset<T, PacoteCnpjCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PacoteCnpjs and returns the data saved in the database.
     * @param {PacoteCnpjCreateManyAndReturnArgs} args - Arguments to create many PacoteCnpjs.
     * @example
     * // Create many PacoteCnpjs
     * const pacoteCnpj = await prisma.pacoteCnpj.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PacoteCnpjs and only return the `id`
     * const pacoteCnpjWithIdOnly = await prisma.pacoteCnpj.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PacoteCnpjCreateManyAndReturnArgs>(args?: SelectSubset<T, PacoteCnpjCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacoteCnpjPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PacoteCnpj.
     * @param {PacoteCnpjDeleteArgs} args - Arguments to delete one PacoteCnpj.
     * @example
     * // Delete one PacoteCnpj
     * const PacoteCnpj = await prisma.pacoteCnpj.delete({
     *   where: {
     *     // ... filter to delete one PacoteCnpj
     *   }
     * })
     * 
     */
    delete<T extends PacoteCnpjDeleteArgs>(args: SelectSubset<T, PacoteCnpjDeleteArgs<ExtArgs>>): Prisma__PacoteCnpjClient<$Result.GetResult<Prisma.$PacoteCnpjPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PacoteCnpj.
     * @param {PacoteCnpjUpdateArgs} args - Arguments to update one PacoteCnpj.
     * @example
     * // Update one PacoteCnpj
     * const pacoteCnpj = await prisma.pacoteCnpj.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PacoteCnpjUpdateArgs>(args: SelectSubset<T, PacoteCnpjUpdateArgs<ExtArgs>>): Prisma__PacoteCnpjClient<$Result.GetResult<Prisma.$PacoteCnpjPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PacoteCnpjs.
     * @param {PacoteCnpjDeleteManyArgs} args - Arguments to filter PacoteCnpjs to delete.
     * @example
     * // Delete a few PacoteCnpjs
     * const { count } = await prisma.pacoteCnpj.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PacoteCnpjDeleteManyArgs>(args?: SelectSubset<T, PacoteCnpjDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PacoteCnpjs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacoteCnpjUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PacoteCnpjs
     * const pacoteCnpj = await prisma.pacoteCnpj.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PacoteCnpjUpdateManyArgs>(args: SelectSubset<T, PacoteCnpjUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PacoteCnpjs and returns the data updated in the database.
     * @param {PacoteCnpjUpdateManyAndReturnArgs} args - Arguments to update many PacoteCnpjs.
     * @example
     * // Update many PacoteCnpjs
     * const pacoteCnpj = await prisma.pacoteCnpj.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PacoteCnpjs and only return the `id`
     * const pacoteCnpjWithIdOnly = await prisma.pacoteCnpj.updateManyAndReturn({
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
    updateManyAndReturn<T extends PacoteCnpjUpdateManyAndReturnArgs>(args: SelectSubset<T, PacoteCnpjUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacoteCnpjPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PacoteCnpj.
     * @param {PacoteCnpjUpsertArgs} args - Arguments to update or create a PacoteCnpj.
     * @example
     * // Update or create a PacoteCnpj
     * const pacoteCnpj = await prisma.pacoteCnpj.upsert({
     *   create: {
     *     // ... data to create a PacoteCnpj
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PacoteCnpj we want to update
     *   }
     * })
     */
    upsert<T extends PacoteCnpjUpsertArgs>(args: SelectSubset<T, PacoteCnpjUpsertArgs<ExtArgs>>): Prisma__PacoteCnpjClient<$Result.GetResult<Prisma.$PacoteCnpjPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PacoteCnpjs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacoteCnpjCountArgs} args - Arguments to filter PacoteCnpjs to count.
     * @example
     * // Count the number of PacoteCnpjs
     * const count = await prisma.pacoteCnpj.count({
     *   where: {
     *     // ... the filter for the PacoteCnpjs we want to count
     *   }
     * })
    **/
    count<T extends PacoteCnpjCountArgs>(
      args?: Subset<T, PacoteCnpjCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PacoteCnpjCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PacoteCnpj.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacoteCnpjAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PacoteCnpjAggregateArgs>(args: Subset<T, PacoteCnpjAggregateArgs>): Prisma.PrismaPromise<GetPacoteCnpjAggregateType<T>>

    /**
     * Group by PacoteCnpj.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacoteCnpjGroupByArgs} args - Group by arguments.
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
      T extends PacoteCnpjGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PacoteCnpjGroupByArgs['orderBy'] }
        : { orderBy?: PacoteCnpjGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PacoteCnpjGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPacoteCnpjGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PacoteCnpj model
   */
  readonly fields: PacoteCnpjFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PacoteCnpj.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PacoteCnpjClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pacote<T extends PacoteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PacoteDefaultArgs<ExtArgs>>): Prisma__PacoteClient<$Result.GetResult<Prisma.$PacotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PacoteCnpj model
   */
  interface PacoteCnpjFieldRefs {
    readonly id: FieldRef<"PacoteCnpj", 'String'>
    readonly cnpj: FieldRef<"PacoteCnpj", 'String'>
    readonly pacoteId: FieldRef<"PacoteCnpj", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PacoteCnpj findUnique
   */
  export type PacoteCnpjFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacoteCnpj
     */
    select?: PacoteCnpjSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacoteCnpj
     */
    omit?: PacoteCnpjOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteCnpjInclude<ExtArgs> | null
    /**
     * Filter, which PacoteCnpj to fetch.
     */
    where: PacoteCnpjWhereUniqueInput
  }

  /**
   * PacoteCnpj findUniqueOrThrow
   */
  export type PacoteCnpjFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacoteCnpj
     */
    select?: PacoteCnpjSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacoteCnpj
     */
    omit?: PacoteCnpjOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteCnpjInclude<ExtArgs> | null
    /**
     * Filter, which PacoteCnpj to fetch.
     */
    where: PacoteCnpjWhereUniqueInput
  }

  /**
   * PacoteCnpj findFirst
   */
  export type PacoteCnpjFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacoteCnpj
     */
    select?: PacoteCnpjSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacoteCnpj
     */
    omit?: PacoteCnpjOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteCnpjInclude<ExtArgs> | null
    /**
     * Filter, which PacoteCnpj to fetch.
     */
    where?: PacoteCnpjWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PacoteCnpjs to fetch.
     */
    orderBy?: PacoteCnpjOrderByWithRelationInput | PacoteCnpjOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PacoteCnpjs.
     */
    cursor?: PacoteCnpjWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PacoteCnpjs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PacoteCnpjs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PacoteCnpjs.
     */
    distinct?: PacoteCnpjScalarFieldEnum | PacoteCnpjScalarFieldEnum[]
  }

  /**
   * PacoteCnpj findFirstOrThrow
   */
  export type PacoteCnpjFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacoteCnpj
     */
    select?: PacoteCnpjSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacoteCnpj
     */
    omit?: PacoteCnpjOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteCnpjInclude<ExtArgs> | null
    /**
     * Filter, which PacoteCnpj to fetch.
     */
    where?: PacoteCnpjWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PacoteCnpjs to fetch.
     */
    orderBy?: PacoteCnpjOrderByWithRelationInput | PacoteCnpjOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PacoteCnpjs.
     */
    cursor?: PacoteCnpjWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PacoteCnpjs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PacoteCnpjs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PacoteCnpjs.
     */
    distinct?: PacoteCnpjScalarFieldEnum | PacoteCnpjScalarFieldEnum[]
  }

  /**
   * PacoteCnpj findMany
   */
  export type PacoteCnpjFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacoteCnpj
     */
    select?: PacoteCnpjSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacoteCnpj
     */
    omit?: PacoteCnpjOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteCnpjInclude<ExtArgs> | null
    /**
     * Filter, which PacoteCnpjs to fetch.
     */
    where?: PacoteCnpjWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PacoteCnpjs to fetch.
     */
    orderBy?: PacoteCnpjOrderByWithRelationInput | PacoteCnpjOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PacoteCnpjs.
     */
    cursor?: PacoteCnpjWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PacoteCnpjs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PacoteCnpjs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PacoteCnpjs.
     */
    distinct?: PacoteCnpjScalarFieldEnum | PacoteCnpjScalarFieldEnum[]
  }

  /**
   * PacoteCnpj create
   */
  export type PacoteCnpjCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacoteCnpj
     */
    select?: PacoteCnpjSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacoteCnpj
     */
    omit?: PacoteCnpjOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteCnpjInclude<ExtArgs> | null
    /**
     * The data needed to create a PacoteCnpj.
     */
    data: XOR<PacoteCnpjCreateInput, PacoteCnpjUncheckedCreateInput>
  }

  /**
   * PacoteCnpj createMany
   */
  export type PacoteCnpjCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PacoteCnpjs.
     */
    data: PacoteCnpjCreateManyInput | PacoteCnpjCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PacoteCnpj createManyAndReturn
   */
  export type PacoteCnpjCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacoteCnpj
     */
    select?: PacoteCnpjSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PacoteCnpj
     */
    omit?: PacoteCnpjOmit<ExtArgs> | null
    /**
     * The data used to create many PacoteCnpjs.
     */
    data: PacoteCnpjCreateManyInput | PacoteCnpjCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteCnpjIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PacoteCnpj update
   */
  export type PacoteCnpjUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacoteCnpj
     */
    select?: PacoteCnpjSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacoteCnpj
     */
    omit?: PacoteCnpjOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteCnpjInclude<ExtArgs> | null
    /**
     * The data needed to update a PacoteCnpj.
     */
    data: XOR<PacoteCnpjUpdateInput, PacoteCnpjUncheckedUpdateInput>
    /**
     * Choose, which PacoteCnpj to update.
     */
    where: PacoteCnpjWhereUniqueInput
  }

  /**
   * PacoteCnpj updateMany
   */
  export type PacoteCnpjUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PacoteCnpjs.
     */
    data: XOR<PacoteCnpjUpdateManyMutationInput, PacoteCnpjUncheckedUpdateManyInput>
    /**
     * Filter which PacoteCnpjs to update
     */
    where?: PacoteCnpjWhereInput
    /**
     * Limit how many PacoteCnpjs to update.
     */
    limit?: number
  }

  /**
   * PacoteCnpj updateManyAndReturn
   */
  export type PacoteCnpjUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacoteCnpj
     */
    select?: PacoteCnpjSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PacoteCnpj
     */
    omit?: PacoteCnpjOmit<ExtArgs> | null
    /**
     * The data used to update PacoteCnpjs.
     */
    data: XOR<PacoteCnpjUpdateManyMutationInput, PacoteCnpjUncheckedUpdateManyInput>
    /**
     * Filter which PacoteCnpjs to update
     */
    where?: PacoteCnpjWhereInput
    /**
     * Limit how many PacoteCnpjs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteCnpjIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PacoteCnpj upsert
   */
  export type PacoteCnpjUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacoteCnpj
     */
    select?: PacoteCnpjSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacoteCnpj
     */
    omit?: PacoteCnpjOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteCnpjInclude<ExtArgs> | null
    /**
     * The filter to search for the PacoteCnpj to update in case it exists.
     */
    where: PacoteCnpjWhereUniqueInput
    /**
     * In case the PacoteCnpj found by the `where` argument doesn't exist, create a new PacoteCnpj with this data.
     */
    create: XOR<PacoteCnpjCreateInput, PacoteCnpjUncheckedCreateInput>
    /**
     * In case the PacoteCnpj was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PacoteCnpjUpdateInput, PacoteCnpjUncheckedUpdateInput>
  }

  /**
   * PacoteCnpj delete
   */
  export type PacoteCnpjDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacoteCnpj
     */
    select?: PacoteCnpjSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacoteCnpj
     */
    omit?: PacoteCnpjOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteCnpjInclude<ExtArgs> | null
    /**
     * Filter which PacoteCnpj to delete.
     */
    where: PacoteCnpjWhereUniqueInput
  }

  /**
   * PacoteCnpj deleteMany
   */
  export type PacoteCnpjDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PacoteCnpjs to delete
     */
    where?: PacoteCnpjWhereInput
    /**
     * Limit how many PacoteCnpjs to delete.
     */
    limit?: number
  }

  /**
   * PacoteCnpj without action
   */
  export type PacoteCnpjDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacoteCnpj
     */
    select?: PacoteCnpjSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacoteCnpj
     */
    omit?: PacoteCnpjOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteCnpjInclude<ExtArgs> | null
  }


  /**
   * Model PacoteHospital
   */

  export type AggregatePacoteHospital = {
    _count: PacoteHospitalCountAggregateOutputType | null
    _min: PacoteHospitalMinAggregateOutputType | null
    _max: PacoteHospitalMaxAggregateOutputType | null
  }

  export type PacoteHospitalMinAggregateOutputType = {
    id: string | null
    nome: string | null
    pacoteId: string | null
  }

  export type PacoteHospitalMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    pacoteId: string | null
  }

  export type PacoteHospitalCountAggregateOutputType = {
    id: number
    nome: number
    pacoteId: number
    _all: number
  }


  export type PacoteHospitalMinAggregateInputType = {
    id?: true
    nome?: true
    pacoteId?: true
  }

  export type PacoteHospitalMaxAggregateInputType = {
    id?: true
    nome?: true
    pacoteId?: true
  }

  export type PacoteHospitalCountAggregateInputType = {
    id?: true
    nome?: true
    pacoteId?: true
    _all?: true
  }

  export type PacoteHospitalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PacoteHospital to aggregate.
     */
    where?: PacoteHospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PacoteHospitals to fetch.
     */
    orderBy?: PacoteHospitalOrderByWithRelationInput | PacoteHospitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PacoteHospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PacoteHospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PacoteHospitals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PacoteHospitals
    **/
    _count?: true | PacoteHospitalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PacoteHospitalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PacoteHospitalMaxAggregateInputType
  }

  export type GetPacoteHospitalAggregateType<T extends PacoteHospitalAggregateArgs> = {
        [P in keyof T & keyof AggregatePacoteHospital]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePacoteHospital[P]>
      : GetScalarType<T[P], AggregatePacoteHospital[P]>
  }




  export type PacoteHospitalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PacoteHospitalWhereInput
    orderBy?: PacoteHospitalOrderByWithAggregationInput | PacoteHospitalOrderByWithAggregationInput[]
    by: PacoteHospitalScalarFieldEnum[] | PacoteHospitalScalarFieldEnum
    having?: PacoteHospitalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PacoteHospitalCountAggregateInputType | true
    _min?: PacoteHospitalMinAggregateInputType
    _max?: PacoteHospitalMaxAggregateInputType
  }

  export type PacoteHospitalGroupByOutputType = {
    id: string
    nome: string
    pacoteId: string
    _count: PacoteHospitalCountAggregateOutputType | null
    _min: PacoteHospitalMinAggregateOutputType | null
    _max: PacoteHospitalMaxAggregateOutputType | null
  }

  type GetPacoteHospitalGroupByPayload<T extends PacoteHospitalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PacoteHospitalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PacoteHospitalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PacoteHospitalGroupByOutputType[P]>
            : GetScalarType<T[P], PacoteHospitalGroupByOutputType[P]>
        }
      >
    >


  export type PacoteHospitalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    pacoteId?: boolean
    pacote?: boolean | PacoteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pacoteHospital"]>

  export type PacoteHospitalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    pacoteId?: boolean
    pacote?: boolean | PacoteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pacoteHospital"]>

  export type PacoteHospitalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    pacoteId?: boolean
    pacote?: boolean | PacoteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pacoteHospital"]>

  export type PacoteHospitalSelectScalar = {
    id?: boolean
    nome?: boolean
    pacoteId?: boolean
  }

  export type PacoteHospitalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "pacoteId", ExtArgs["result"]["pacoteHospital"]>
  export type PacoteHospitalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacote?: boolean | PacoteDefaultArgs<ExtArgs>
  }
  export type PacoteHospitalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacote?: boolean | PacoteDefaultArgs<ExtArgs>
  }
  export type PacoteHospitalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacote?: boolean | PacoteDefaultArgs<ExtArgs>
  }

  export type $PacoteHospitalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PacoteHospital"
    objects: {
      pacote: Prisma.$PacotePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      pacoteId: string
    }, ExtArgs["result"]["pacoteHospital"]>
    composites: {}
  }

  type PacoteHospitalGetPayload<S extends boolean | null | undefined | PacoteHospitalDefaultArgs> = $Result.GetResult<Prisma.$PacoteHospitalPayload, S>

  type PacoteHospitalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PacoteHospitalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PacoteHospitalCountAggregateInputType | true
    }

  export interface PacoteHospitalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PacoteHospital'], meta: { name: 'PacoteHospital' } }
    /**
     * Find zero or one PacoteHospital that matches the filter.
     * @param {PacoteHospitalFindUniqueArgs} args - Arguments to find a PacoteHospital
     * @example
     * // Get one PacoteHospital
     * const pacoteHospital = await prisma.pacoteHospital.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PacoteHospitalFindUniqueArgs>(args: SelectSubset<T, PacoteHospitalFindUniqueArgs<ExtArgs>>): Prisma__PacoteHospitalClient<$Result.GetResult<Prisma.$PacoteHospitalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PacoteHospital that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PacoteHospitalFindUniqueOrThrowArgs} args - Arguments to find a PacoteHospital
     * @example
     * // Get one PacoteHospital
     * const pacoteHospital = await prisma.pacoteHospital.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PacoteHospitalFindUniqueOrThrowArgs>(args: SelectSubset<T, PacoteHospitalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PacoteHospitalClient<$Result.GetResult<Prisma.$PacoteHospitalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PacoteHospital that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacoteHospitalFindFirstArgs} args - Arguments to find a PacoteHospital
     * @example
     * // Get one PacoteHospital
     * const pacoteHospital = await prisma.pacoteHospital.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PacoteHospitalFindFirstArgs>(args?: SelectSubset<T, PacoteHospitalFindFirstArgs<ExtArgs>>): Prisma__PacoteHospitalClient<$Result.GetResult<Prisma.$PacoteHospitalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PacoteHospital that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacoteHospitalFindFirstOrThrowArgs} args - Arguments to find a PacoteHospital
     * @example
     * // Get one PacoteHospital
     * const pacoteHospital = await prisma.pacoteHospital.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PacoteHospitalFindFirstOrThrowArgs>(args?: SelectSubset<T, PacoteHospitalFindFirstOrThrowArgs<ExtArgs>>): Prisma__PacoteHospitalClient<$Result.GetResult<Prisma.$PacoteHospitalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PacoteHospitals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacoteHospitalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PacoteHospitals
     * const pacoteHospitals = await prisma.pacoteHospital.findMany()
     * 
     * // Get first 10 PacoteHospitals
     * const pacoteHospitals = await prisma.pacoteHospital.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pacoteHospitalWithIdOnly = await prisma.pacoteHospital.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PacoteHospitalFindManyArgs>(args?: SelectSubset<T, PacoteHospitalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacoteHospitalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PacoteHospital.
     * @param {PacoteHospitalCreateArgs} args - Arguments to create a PacoteHospital.
     * @example
     * // Create one PacoteHospital
     * const PacoteHospital = await prisma.pacoteHospital.create({
     *   data: {
     *     // ... data to create a PacoteHospital
     *   }
     * })
     * 
     */
    create<T extends PacoteHospitalCreateArgs>(args: SelectSubset<T, PacoteHospitalCreateArgs<ExtArgs>>): Prisma__PacoteHospitalClient<$Result.GetResult<Prisma.$PacoteHospitalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PacoteHospitals.
     * @param {PacoteHospitalCreateManyArgs} args - Arguments to create many PacoteHospitals.
     * @example
     * // Create many PacoteHospitals
     * const pacoteHospital = await prisma.pacoteHospital.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PacoteHospitalCreateManyArgs>(args?: SelectSubset<T, PacoteHospitalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PacoteHospitals and returns the data saved in the database.
     * @param {PacoteHospitalCreateManyAndReturnArgs} args - Arguments to create many PacoteHospitals.
     * @example
     * // Create many PacoteHospitals
     * const pacoteHospital = await prisma.pacoteHospital.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PacoteHospitals and only return the `id`
     * const pacoteHospitalWithIdOnly = await prisma.pacoteHospital.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PacoteHospitalCreateManyAndReturnArgs>(args?: SelectSubset<T, PacoteHospitalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacoteHospitalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PacoteHospital.
     * @param {PacoteHospitalDeleteArgs} args - Arguments to delete one PacoteHospital.
     * @example
     * // Delete one PacoteHospital
     * const PacoteHospital = await prisma.pacoteHospital.delete({
     *   where: {
     *     // ... filter to delete one PacoteHospital
     *   }
     * })
     * 
     */
    delete<T extends PacoteHospitalDeleteArgs>(args: SelectSubset<T, PacoteHospitalDeleteArgs<ExtArgs>>): Prisma__PacoteHospitalClient<$Result.GetResult<Prisma.$PacoteHospitalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PacoteHospital.
     * @param {PacoteHospitalUpdateArgs} args - Arguments to update one PacoteHospital.
     * @example
     * // Update one PacoteHospital
     * const pacoteHospital = await prisma.pacoteHospital.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PacoteHospitalUpdateArgs>(args: SelectSubset<T, PacoteHospitalUpdateArgs<ExtArgs>>): Prisma__PacoteHospitalClient<$Result.GetResult<Prisma.$PacoteHospitalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PacoteHospitals.
     * @param {PacoteHospitalDeleteManyArgs} args - Arguments to filter PacoteHospitals to delete.
     * @example
     * // Delete a few PacoteHospitals
     * const { count } = await prisma.pacoteHospital.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PacoteHospitalDeleteManyArgs>(args?: SelectSubset<T, PacoteHospitalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PacoteHospitals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacoteHospitalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PacoteHospitals
     * const pacoteHospital = await prisma.pacoteHospital.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PacoteHospitalUpdateManyArgs>(args: SelectSubset<T, PacoteHospitalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PacoteHospitals and returns the data updated in the database.
     * @param {PacoteHospitalUpdateManyAndReturnArgs} args - Arguments to update many PacoteHospitals.
     * @example
     * // Update many PacoteHospitals
     * const pacoteHospital = await prisma.pacoteHospital.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PacoteHospitals and only return the `id`
     * const pacoteHospitalWithIdOnly = await prisma.pacoteHospital.updateManyAndReturn({
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
    updateManyAndReturn<T extends PacoteHospitalUpdateManyAndReturnArgs>(args: SelectSubset<T, PacoteHospitalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacoteHospitalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PacoteHospital.
     * @param {PacoteHospitalUpsertArgs} args - Arguments to update or create a PacoteHospital.
     * @example
     * // Update or create a PacoteHospital
     * const pacoteHospital = await prisma.pacoteHospital.upsert({
     *   create: {
     *     // ... data to create a PacoteHospital
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PacoteHospital we want to update
     *   }
     * })
     */
    upsert<T extends PacoteHospitalUpsertArgs>(args: SelectSubset<T, PacoteHospitalUpsertArgs<ExtArgs>>): Prisma__PacoteHospitalClient<$Result.GetResult<Prisma.$PacoteHospitalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PacoteHospitals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacoteHospitalCountArgs} args - Arguments to filter PacoteHospitals to count.
     * @example
     * // Count the number of PacoteHospitals
     * const count = await prisma.pacoteHospital.count({
     *   where: {
     *     // ... the filter for the PacoteHospitals we want to count
     *   }
     * })
    **/
    count<T extends PacoteHospitalCountArgs>(
      args?: Subset<T, PacoteHospitalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PacoteHospitalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PacoteHospital.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacoteHospitalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PacoteHospitalAggregateArgs>(args: Subset<T, PacoteHospitalAggregateArgs>): Prisma.PrismaPromise<GetPacoteHospitalAggregateType<T>>

    /**
     * Group by PacoteHospital.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacoteHospitalGroupByArgs} args - Group by arguments.
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
      T extends PacoteHospitalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PacoteHospitalGroupByArgs['orderBy'] }
        : { orderBy?: PacoteHospitalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PacoteHospitalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPacoteHospitalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PacoteHospital model
   */
  readonly fields: PacoteHospitalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PacoteHospital.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PacoteHospitalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pacote<T extends PacoteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PacoteDefaultArgs<ExtArgs>>): Prisma__PacoteClient<$Result.GetResult<Prisma.$PacotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PacoteHospital model
   */
  interface PacoteHospitalFieldRefs {
    readonly id: FieldRef<"PacoteHospital", 'String'>
    readonly nome: FieldRef<"PacoteHospital", 'String'>
    readonly pacoteId: FieldRef<"PacoteHospital", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PacoteHospital findUnique
   */
  export type PacoteHospitalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacoteHospital
     */
    select?: PacoteHospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacoteHospital
     */
    omit?: PacoteHospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteHospitalInclude<ExtArgs> | null
    /**
     * Filter, which PacoteHospital to fetch.
     */
    where: PacoteHospitalWhereUniqueInput
  }

  /**
   * PacoteHospital findUniqueOrThrow
   */
  export type PacoteHospitalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacoteHospital
     */
    select?: PacoteHospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacoteHospital
     */
    omit?: PacoteHospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteHospitalInclude<ExtArgs> | null
    /**
     * Filter, which PacoteHospital to fetch.
     */
    where: PacoteHospitalWhereUniqueInput
  }

  /**
   * PacoteHospital findFirst
   */
  export type PacoteHospitalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacoteHospital
     */
    select?: PacoteHospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacoteHospital
     */
    omit?: PacoteHospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteHospitalInclude<ExtArgs> | null
    /**
     * Filter, which PacoteHospital to fetch.
     */
    where?: PacoteHospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PacoteHospitals to fetch.
     */
    orderBy?: PacoteHospitalOrderByWithRelationInput | PacoteHospitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PacoteHospitals.
     */
    cursor?: PacoteHospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PacoteHospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PacoteHospitals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PacoteHospitals.
     */
    distinct?: PacoteHospitalScalarFieldEnum | PacoteHospitalScalarFieldEnum[]
  }

  /**
   * PacoteHospital findFirstOrThrow
   */
  export type PacoteHospitalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacoteHospital
     */
    select?: PacoteHospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacoteHospital
     */
    omit?: PacoteHospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteHospitalInclude<ExtArgs> | null
    /**
     * Filter, which PacoteHospital to fetch.
     */
    where?: PacoteHospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PacoteHospitals to fetch.
     */
    orderBy?: PacoteHospitalOrderByWithRelationInput | PacoteHospitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PacoteHospitals.
     */
    cursor?: PacoteHospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PacoteHospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PacoteHospitals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PacoteHospitals.
     */
    distinct?: PacoteHospitalScalarFieldEnum | PacoteHospitalScalarFieldEnum[]
  }

  /**
   * PacoteHospital findMany
   */
  export type PacoteHospitalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacoteHospital
     */
    select?: PacoteHospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacoteHospital
     */
    omit?: PacoteHospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteHospitalInclude<ExtArgs> | null
    /**
     * Filter, which PacoteHospitals to fetch.
     */
    where?: PacoteHospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PacoteHospitals to fetch.
     */
    orderBy?: PacoteHospitalOrderByWithRelationInput | PacoteHospitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PacoteHospitals.
     */
    cursor?: PacoteHospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PacoteHospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PacoteHospitals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PacoteHospitals.
     */
    distinct?: PacoteHospitalScalarFieldEnum | PacoteHospitalScalarFieldEnum[]
  }

  /**
   * PacoteHospital create
   */
  export type PacoteHospitalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacoteHospital
     */
    select?: PacoteHospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacoteHospital
     */
    omit?: PacoteHospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteHospitalInclude<ExtArgs> | null
    /**
     * The data needed to create a PacoteHospital.
     */
    data: XOR<PacoteHospitalCreateInput, PacoteHospitalUncheckedCreateInput>
  }

  /**
   * PacoteHospital createMany
   */
  export type PacoteHospitalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PacoteHospitals.
     */
    data: PacoteHospitalCreateManyInput | PacoteHospitalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PacoteHospital createManyAndReturn
   */
  export type PacoteHospitalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacoteHospital
     */
    select?: PacoteHospitalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PacoteHospital
     */
    omit?: PacoteHospitalOmit<ExtArgs> | null
    /**
     * The data used to create many PacoteHospitals.
     */
    data: PacoteHospitalCreateManyInput | PacoteHospitalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteHospitalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PacoteHospital update
   */
  export type PacoteHospitalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacoteHospital
     */
    select?: PacoteHospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacoteHospital
     */
    omit?: PacoteHospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteHospitalInclude<ExtArgs> | null
    /**
     * The data needed to update a PacoteHospital.
     */
    data: XOR<PacoteHospitalUpdateInput, PacoteHospitalUncheckedUpdateInput>
    /**
     * Choose, which PacoteHospital to update.
     */
    where: PacoteHospitalWhereUniqueInput
  }

  /**
   * PacoteHospital updateMany
   */
  export type PacoteHospitalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PacoteHospitals.
     */
    data: XOR<PacoteHospitalUpdateManyMutationInput, PacoteHospitalUncheckedUpdateManyInput>
    /**
     * Filter which PacoteHospitals to update
     */
    where?: PacoteHospitalWhereInput
    /**
     * Limit how many PacoteHospitals to update.
     */
    limit?: number
  }

  /**
   * PacoteHospital updateManyAndReturn
   */
  export type PacoteHospitalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacoteHospital
     */
    select?: PacoteHospitalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PacoteHospital
     */
    omit?: PacoteHospitalOmit<ExtArgs> | null
    /**
     * The data used to update PacoteHospitals.
     */
    data: XOR<PacoteHospitalUpdateManyMutationInput, PacoteHospitalUncheckedUpdateManyInput>
    /**
     * Filter which PacoteHospitals to update
     */
    where?: PacoteHospitalWhereInput
    /**
     * Limit how many PacoteHospitals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteHospitalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PacoteHospital upsert
   */
  export type PacoteHospitalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacoteHospital
     */
    select?: PacoteHospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacoteHospital
     */
    omit?: PacoteHospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteHospitalInclude<ExtArgs> | null
    /**
     * The filter to search for the PacoteHospital to update in case it exists.
     */
    where: PacoteHospitalWhereUniqueInput
    /**
     * In case the PacoteHospital found by the `where` argument doesn't exist, create a new PacoteHospital with this data.
     */
    create: XOR<PacoteHospitalCreateInput, PacoteHospitalUncheckedCreateInput>
    /**
     * In case the PacoteHospital was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PacoteHospitalUpdateInput, PacoteHospitalUncheckedUpdateInput>
  }

  /**
   * PacoteHospital delete
   */
  export type PacoteHospitalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacoteHospital
     */
    select?: PacoteHospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacoteHospital
     */
    omit?: PacoteHospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteHospitalInclude<ExtArgs> | null
    /**
     * Filter which PacoteHospital to delete.
     */
    where: PacoteHospitalWhereUniqueInput
  }

  /**
   * PacoteHospital deleteMany
   */
  export type PacoteHospitalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PacoteHospitals to delete
     */
    where?: PacoteHospitalWhereInput
    /**
     * Limit how many PacoteHospitals to delete.
     */
    limit?: number
  }

  /**
   * PacoteHospital without action
   */
  export type PacoteHospitalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacoteHospital
     */
    select?: PacoteHospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacoteHospital
     */
    omit?: PacoteHospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteHospitalInclude<ExtArgs> | null
  }


  /**
   * Model PacoteContemplacao
   */

  export type AggregatePacoteContemplacao = {
    _count: PacoteContemplacaoCountAggregateOutputType | null
    _min: PacoteContemplacaoMinAggregateOutputType | null
    _max: PacoteContemplacaoMaxAggregateOutputType | null
  }

  export type PacoteContemplacaoMinAggregateOutputType = {
    id: string | null
    codigo: string | null
    descricao: string | null
    valor: string | null
    pacoteId: string | null
  }

  export type PacoteContemplacaoMaxAggregateOutputType = {
    id: string | null
    codigo: string | null
    descricao: string | null
    valor: string | null
    pacoteId: string | null
  }

  export type PacoteContemplacaoCountAggregateOutputType = {
    id: number
    codigo: number
    descricao: number
    valor: number
    pacoteId: number
    _all: number
  }


  export type PacoteContemplacaoMinAggregateInputType = {
    id?: true
    codigo?: true
    descricao?: true
    valor?: true
    pacoteId?: true
  }

  export type PacoteContemplacaoMaxAggregateInputType = {
    id?: true
    codigo?: true
    descricao?: true
    valor?: true
    pacoteId?: true
  }

  export type PacoteContemplacaoCountAggregateInputType = {
    id?: true
    codigo?: true
    descricao?: true
    valor?: true
    pacoteId?: true
    _all?: true
  }

  export type PacoteContemplacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PacoteContemplacao to aggregate.
     */
    where?: PacoteContemplacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PacoteContemplacaos to fetch.
     */
    orderBy?: PacoteContemplacaoOrderByWithRelationInput | PacoteContemplacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PacoteContemplacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PacoteContemplacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PacoteContemplacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PacoteContemplacaos
    **/
    _count?: true | PacoteContemplacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PacoteContemplacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PacoteContemplacaoMaxAggregateInputType
  }

  export type GetPacoteContemplacaoAggregateType<T extends PacoteContemplacaoAggregateArgs> = {
        [P in keyof T & keyof AggregatePacoteContemplacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePacoteContemplacao[P]>
      : GetScalarType<T[P], AggregatePacoteContemplacao[P]>
  }




  export type PacoteContemplacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PacoteContemplacaoWhereInput
    orderBy?: PacoteContemplacaoOrderByWithAggregationInput | PacoteContemplacaoOrderByWithAggregationInput[]
    by: PacoteContemplacaoScalarFieldEnum[] | PacoteContemplacaoScalarFieldEnum
    having?: PacoteContemplacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PacoteContemplacaoCountAggregateInputType | true
    _min?: PacoteContemplacaoMinAggregateInputType
    _max?: PacoteContemplacaoMaxAggregateInputType
  }

  export type PacoteContemplacaoGroupByOutputType = {
    id: string
    codigo: string
    descricao: string
    valor: string
    pacoteId: string
    _count: PacoteContemplacaoCountAggregateOutputType | null
    _min: PacoteContemplacaoMinAggregateOutputType | null
    _max: PacoteContemplacaoMaxAggregateOutputType | null
  }

  type GetPacoteContemplacaoGroupByPayload<T extends PacoteContemplacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PacoteContemplacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PacoteContemplacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PacoteContemplacaoGroupByOutputType[P]>
            : GetScalarType<T[P], PacoteContemplacaoGroupByOutputType[P]>
        }
      >
    >


  export type PacoteContemplacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    descricao?: boolean
    valor?: boolean
    pacoteId?: boolean
    pacote?: boolean | PacoteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pacoteContemplacao"]>

  export type PacoteContemplacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    descricao?: boolean
    valor?: boolean
    pacoteId?: boolean
    pacote?: boolean | PacoteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pacoteContemplacao"]>

  export type PacoteContemplacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    descricao?: boolean
    valor?: boolean
    pacoteId?: boolean
    pacote?: boolean | PacoteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pacoteContemplacao"]>

  export type PacoteContemplacaoSelectScalar = {
    id?: boolean
    codigo?: boolean
    descricao?: boolean
    valor?: boolean
    pacoteId?: boolean
  }

  export type PacoteContemplacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "codigo" | "descricao" | "valor" | "pacoteId", ExtArgs["result"]["pacoteContemplacao"]>
  export type PacoteContemplacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacote?: boolean | PacoteDefaultArgs<ExtArgs>
  }
  export type PacoteContemplacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacote?: boolean | PacoteDefaultArgs<ExtArgs>
  }
  export type PacoteContemplacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacote?: boolean | PacoteDefaultArgs<ExtArgs>
  }

  export type $PacoteContemplacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PacoteContemplacao"
    objects: {
      pacote: Prisma.$PacotePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      codigo: string
      descricao: string
      valor: string
      pacoteId: string
    }, ExtArgs["result"]["pacoteContemplacao"]>
    composites: {}
  }

  type PacoteContemplacaoGetPayload<S extends boolean | null | undefined | PacoteContemplacaoDefaultArgs> = $Result.GetResult<Prisma.$PacoteContemplacaoPayload, S>

  type PacoteContemplacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PacoteContemplacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PacoteContemplacaoCountAggregateInputType | true
    }

  export interface PacoteContemplacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PacoteContemplacao'], meta: { name: 'PacoteContemplacao' } }
    /**
     * Find zero or one PacoteContemplacao that matches the filter.
     * @param {PacoteContemplacaoFindUniqueArgs} args - Arguments to find a PacoteContemplacao
     * @example
     * // Get one PacoteContemplacao
     * const pacoteContemplacao = await prisma.pacoteContemplacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PacoteContemplacaoFindUniqueArgs>(args: SelectSubset<T, PacoteContemplacaoFindUniqueArgs<ExtArgs>>): Prisma__PacoteContemplacaoClient<$Result.GetResult<Prisma.$PacoteContemplacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PacoteContemplacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PacoteContemplacaoFindUniqueOrThrowArgs} args - Arguments to find a PacoteContemplacao
     * @example
     * // Get one PacoteContemplacao
     * const pacoteContemplacao = await prisma.pacoteContemplacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PacoteContemplacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, PacoteContemplacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PacoteContemplacaoClient<$Result.GetResult<Prisma.$PacoteContemplacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PacoteContemplacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacoteContemplacaoFindFirstArgs} args - Arguments to find a PacoteContemplacao
     * @example
     * // Get one PacoteContemplacao
     * const pacoteContemplacao = await prisma.pacoteContemplacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PacoteContemplacaoFindFirstArgs>(args?: SelectSubset<T, PacoteContemplacaoFindFirstArgs<ExtArgs>>): Prisma__PacoteContemplacaoClient<$Result.GetResult<Prisma.$PacoteContemplacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PacoteContemplacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacoteContemplacaoFindFirstOrThrowArgs} args - Arguments to find a PacoteContemplacao
     * @example
     * // Get one PacoteContemplacao
     * const pacoteContemplacao = await prisma.pacoteContemplacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PacoteContemplacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, PacoteContemplacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PacoteContemplacaoClient<$Result.GetResult<Prisma.$PacoteContemplacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PacoteContemplacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacoteContemplacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PacoteContemplacaos
     * const pacoteContemplacaos = await prisma.pacoteContemplacao.findMany()
     * 
     * // Get first 10 PacoteContemplacaos
     * const pacoteContemplacaos = await prisma.pacoteContemplacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pacoteContemplacaoWithIdOnly = await prisma.pacoteContemplacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PacoteContemplacaoFindManyArgs>(args?: SelectSubset<T, PacoteContemplacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacoteContemplacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PacoteContemplacao.
     * @param {PacoteContemplacaoCreateArgs} args - Arguments to create a PacoteContemplacao.
     * @example
     * // Create one PacoteContemplacao
     * const PacoteContemplacao = await prisma.pacoteContemplacao.create({
     *   data: {
     *     // ... data to create a PacoteContemplacao
     *   }
     * })
     * 
     */
    create<T extends PacoteContemplacaoCreateArgs>(args: SelectSubset<T, PacoteContemplacaoCreateArgs<ExtArgs>>): Prisma__PacoteContemplacaoClient<$Result.GetResult<Prisma.$PacoteContemplacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PacoteContemplacaos.
     * @param {PacoteContemplacaoCreateManyArgs} args - Arguments to create many PacoteContemplacaos.
     * @example
     * // Create many PacoteContemplacaos
     * const pacoteContemplacao = await prisma.pacoteContemplacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PacoteContemplacaoCreateManyArgs>(args?: SelectSubset<T, PacoteContemplacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PacoteContemplacaos and returns the data saved in the database.
     * @param {PacoteContemplacaoCreateManyAndReturnArgs} args - Arguments to create many PacoteContemplacaos.
     * @example
     * // Create many PacoteContemplacaos
     * const pacoteContemplacao = await prisma.pacoteContemplacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PacoteContemplacaos and only return the `id`
     * const pacoteContemplacaoWithIdOnly = await prisma.pacoteContemplacao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PacoteContemplacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, PacoteContemplacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacoteContemplacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PacoteContemplacao.
     * @param {PacoteContemplacaoDeleteArgs} args - Arguments to delete one PacoteContemplacao.
     * @example
     * // Delete one PacoteContemplacao
     * const PacoteContemplacao = await prisma.pacoteContemplacao.delete({
     *   where: {
     *     // ... filter to delete one PacoteContemplacao
     *   }
     * })
     * 
     */
    delete<T extends PacoteContemplacaoDeleteArgs>(args: SelectSubset<T, PacoteContemplacaoDeleteArgs<ExtArgs>>): Prisma__PacoteContemplacaoClient<$Result.GetResult<Prisma.$PacoteContemplacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PacoteContemplacao.
     * @param {PacoteContemplacaoUpdateArgs} args - Arguments to update one PacoteContemplacao.
     * @example
     * // Update one PacoteContemplacao
     * const pacoteContemplacao = await prisma.pacoteContemplacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PacoteContemplacaoUpdateArgs>(args: SelectSubset<T, PacoteContemplacaoUpdateArgs<ExtArgs>>): Prisma__PacoteContemplacaoClient<$Result.GetResult<Prisma.$PacoteContemplacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PacoteContemplacaos.
     * @param {PacoteContemplacaoDeleteManyArgs} args - Arguments to filter PacoteContemplacaos to delete.
     * @example
     * // Delete a few PacoteContemplacaos
     * const { count } = await prisma.pacoteContemplacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PacoteContemplacaoDeleteManyArgs>(args?: SelectSubset<T, PacoteContemplacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PacoteContemplacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacoteContemplacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PacoteContemplacaos
     * const pacoteContemplacao = await prisma.pacoteContemplacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PacoteContemplacaoUpdateManyArgs>(args: SelectSubset<T, PacoteContemplacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PacoteContemplacaos and returns the data updated in the database.
     * @param {PacoteContemplacaoUpdateManyAndReturnArgs} args - Arguments to update many PacoteContemplacaos.
     * @example
     * // Update many PacoteContemplacaos
     * const pacoteContemplacao = await prisma.pacoteContemplacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PacoteContemplacaos and only return the `id`
     * const pacoteContemplacaoWithIdOnly = await prisma.pacoteContemplacao.updateManyAndReturn({
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
    updateManyAndReturn<T extends PacoteContemplacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, PacoteContemplacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacoteContemplacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PacoteContemplacao.
     * @param {PacoteContemplacaoUpsertArgs} args - Arguments to update or create a PacoteContemplacao.
     * @example
     * // Update or create a PacoteContemplacao
     * const pacoteContemplacao = await prisma.pacoteContemplacao.upsert({
     *   create: {
     *     // ... data to create a PacoteContemplacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PacoteContemplacao we want to update
     *   }
     * })
     */
    upsert<T extends PacoteContemplacaoUpsertArgs>(args: SelectSubset<T, PacoteContemplacaoUpsertArgs<ExtArgs>>): Prisma__PacoteContemplacaoClient<$Result.GetResult<Prisma.$PacoteContemplacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PacoteContemplacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacoteContemplacaoCountArgs} args - Arguments to filter PacoteContemplacaos to count.
     * @example
     * // Count the number of PacoteContemplacaos
     * const count = await prisma.pacoteContemplacao.count({
     *   where: {
     *     // ... the filter for the PacoteContemplacaos we want to count
     *   }
     * })
    **/
    count<T extends PacoteContemplacaoCountArgs>(
      args?: Subset<T, PacoteContemplacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PacoteContemplacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PacoteContemplacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacoteContemplacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PacoteContemplacaoAggregateArgs>(args: Subset<T, PacoteContemplacaoAggregateArgs>): Prisma.PrismaPromise<GetPacoteContemplacaoAggregateType<T>>

    /**
     * Group by PacoteContemplacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacoteContemplacaoGroupByArgs} args - Group by arguments.
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
      T extends PacoteContemplacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PacoteContemplacaoGroupByArgs['orderBy'] }
        : { orderBy?: PacoteContemplacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PacoteContemplacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPacoteContemplacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PacoteContemplacao model
   */
  readonly fields: PacoteContemplacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PacoteContemplacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PacoteContemplacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pacote<T extends PacoteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PacoteDefaultArgs<ExtArgs>>): Prisma__PacoteClient<$Result.GetResult<Prisma.$PacotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PacoteContemplacao model
   */
  interface PacoteContemplacaoFieldRefs {
    readonly id: FieldRef<"PacoteContemplacao", 'String'>
    readonly codigo: FieldRef<"PacoteContemplacao", 'String'>
    readonly descricao: FieldRef<"PacoteContemplacao", 'String'>
    readonly valor: FieldRef<"PacoteContemplacao", 'String'>
    readonly pacoteId: FieldRef<"PacoteContemplacao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PacoteContemplacao findUnique
   */
  export type PacoteContemplacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacoteContemplacao
     */
    select?: PacoteContemplacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacoteContemplacao
     */
    omit?: PacoteContemplacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteContemplacaoInclude<ExtArgs> | null
    /**
     * Filter, which PacoteContemplacao to fetch.
     */
    where: PacoteContemplacaoWhereUniqueInput
  }

  /**
   * PacoteContemplacao findUniqueOrThrow
   */
  export type PacoteContemplacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacoteContemplacao
     */
    select?: PacoteContemplacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacoteContemplacao
     */
    omit?: PacoteContemplacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteContemplacaoInclude<ExtArgs> | null
    /**
     * Filter, which PacoteContemplacao to fetch.
     */
    where: PacoteContemplacaoWhereUniqueInput
  }

  /**
   * PacoteContemplacao findFirst
   */
  export type PacoteContemplacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacoteContemplacao
     */
    select?: PacoteContemplacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacoteContemplacao
     */
    omit?: PacoteContemplacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteContemplacaoInclude<ExtArgs> | null
    /**
     * Filter, which PacoteContemplacao to fetch.
     */
    where?: PacoteContemplacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PacoteContemplacaos to fetch.
     */
    orderBy?: PacoteContemplacaoOrderByWithRelationInput | PacoteContemplacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PacoteContemplacaos.
     */
    cursor?: PacoteContemplacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PacoteContemplacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PacoteContemplacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PacoteContemplacaos.
     */
    distinct?: PacoteContemplacaoScalarFieldEnum | PacoteContemplacaoScalarFieldEnum[]
  }

  /**
   * PacoteContemplacao findFirstOrThrow
   */
  export type PacoteContemplacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacoteContemplacao
     */
    select?: PacoteContemplacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacoteContemplacao
     */
    omit?: PacoteContemplacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteContemplacaoInclude<ExtArgs> | null
    /**
     * Filter, which PacoteContemplacao to fetch.
     */
    where?: PacoteContemplacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PacoteContemplacaos to fetch.
     */
    orderBy?: PacoteContemplacaoOrderByWithRelationInput | PacoteContemplacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PacoteContemplacaos.
     */
    cursor?: PacoteContemplacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PacoteContemplacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PacoteContemplacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PacoteContemplacaos.
     */
    distinct?: PacoteContemplacaoScalarFieldEnum | PacoteContemplacaoScalarFieldEnum[]
  }

  /**
   * PacoteContemplacao findMany
   */
  export type PacoteContemplacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacoteContemplacao
     */
    select?: PacoteContemplacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacoteContemplacao
     */
    omit?: PacoteContemplacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteContemplacaoInclude<ExtArgs> | null
    /**
     * Filter, which PacoteContemplacaos to fetch.
     */
    where?: PacoteContemplacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PacoteContemplacaos to fetch.
     */
    orderBy?: PacoteContemplacaoOrderByWithRelationInput | PacoteContemplacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PacoteContemplacaos.
     */
    cursor?: PacoteContemplacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PacoteContemplacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PacoteContemplacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PacoteContemplacaos.
     */
    distinct?: PacoteContemplacaoScalarFieldEnum | PacoteContemplacaoScalarFieldEnum[]
  }

  /**
   * PacoteContemplacao create
   */
  export type PacoteContemplacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacoteContemplacao
     */
    select?: PacoteContemplacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacoteContemplacao
     */
    omit?: PacoteContemplacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteContemplacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a PacoteContemplacao.
     */
    data: XOR<PacoteContemplacaoCreateInput, PacoteContemplacaoUncheckedCreateInput>
  }

  /**
   * PacoteContemplacao createMany
   */
  export type PacoteContemplacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PacoteContemplacaos.
     */
    data: PacoteContemplacaoCreateManyInput | PacoteContemplacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PacoteContemplacao createManyAndReturn
   */
  export type PacoteContemplacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacoteContemplacao
     */
    select?: PacoteContemplacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PacoteContemplacao
     */
    omit?: PacoteContemplacaoOmit<ExtArgs> | null
    /**
     * The data used to create many PacoteContemplacaos.
     */
    data: PacoteContemplacaoCreateManyInput | PacoteContemplacaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteContemplacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PacoteContemplacao update
   */
  export type PacoteContemplacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacoteContemplacao
     */
    select?: PacoteContemplacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacoteContemplacao
     */
    omit?: PacoteContemplacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteContemplacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a PacoteContemplacao.
     */
    data: XOR<PacoteContemplacaoUpdateInput, PacoteContemplacaoUncheckedUpdateInput>
    /**
     * Choose, which PacoteContemplacao to update.
     */
    where: PacoteContemplacaoWhereUniqueInput
  }

  /**
   * PacoteContemplacao updateMany
   */
  export type PacoteContemplacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PacoteContemplacaos.
     */
    data: XOR<PacoteContemplacaoUpdateManyMutationInput, PacoteContemplacaoUncheckedUpdateManyInput>
    /**
     * Filter which PacoteContemplacaos to update
     */
    where?: PacoteContemplacaoWhereInput
    /**
     * Limit how many PacoteContemplacaos to update.
     */
    limit?: number
  }

  /**
   * PacoteContemplacao updateManyAndReturn
   */
  export type PacoteContemplacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacoteContemplacao
     */
    select?: PacoteContemplacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PacoteContemplacao
     */
    omit?: PacoteContemplacaoOmit<ExtArgs> | null
    /**
     * The data used to update PacoteContemplacaos.
     */
    data: XOR<PacoteContemplacaoUpdateManyMutationInput, PacoteContemplacaoUncheckedUpdateManyInput>
    /**
     * Filter which PacoteContemplacaos to update
     */
    where?: PacoteContemplacaoWhereInput
    /**
     * Limit how many PacoteContemplacaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteContemplacaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PacoteContemplacao upsert
   */
  export type PacoteContemplacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacoteContemplacao
     */
    select?: PacoteContemplacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacoteContemplacao
     */
    omit?: PacoteContemplacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteContemplacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the PacoteContemplacao to update in case it exists.
     */
    where: PacoteContemplacaoWhereUniqueInput
    /**
     * In case the PacoteContemplacao found by the `where` argument doesn't exist, create a new PacoteContemplacao with this data.
     */
    create: XOR<PacoteContemplacaoCreateInput, PacoteContemplacaoUncheckedCreateInput>
    /**
     * In case the PacoteContemplacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PacoteContemplacaoUpdateInput, PacoteContemplacaoUncheckedUpdateInput>
  }

  /**
   * PacoteContemplacao delete
   */
  export type PacoteContemplacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacoteContemplacao
     */
    select?: PacoteContemplacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacoteContemplacao
     */
    omit?: PacoteContemplacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteContemplacaoInclude<ExtArgs> | null
    /**
     * Filter which PacoteContemplacao to delete.
     */
    where: PacoteContemplacaoWhereUniqueInput
  }

  /**
   * PacoteContemplacao deleteMany
   */
  export type PacoteContemplacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PacoteContemplacaos to delete
     */
    where?: PacoteContemplacaoWhereInput
    /**
     * Limit how many PacoteContemplacaos to delete.
     */
    limit?: number
  }

  /**
   * PacoteContemplacao without action
   */
  export type PacoteContemplacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacoteContemplacao
     */
    select?: PacoteContemplacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacoteContemplacao
     */
    omit?: PacoteContemplacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteContemplacaoInclude<ExtArgs> | null
  }


  /**
   * Model PacoteAnexo
   */

  export type AggregatePacoteAnexo = {
    _count: PacoteAnexoCountAggregateOutputType | null
    _avg: PacoteAnexoAvgAggregateOutputType | null
    _sum: PacoteAnexoSumAggregateOutputType | null
    _min: PacoteAnexoMinAggregateOutputType | null
    _max: PacoteAnexoMaxAggregateOutputType | null
  }

  export type PacoteAnexoAvgAggregateOutputType = {
    tamanhoBytes: number | null
  }

  export type PacoteAnexoSumAggregateOutputType = {
    tamanhoBytes: number | null
  }

  export type PacoteAnexoMinAggregateOutputType = {
    id: string | null
    nomeOriginal: string | null
    caminho: string | null
    mimeType: string | null
    tamanhoBytes: number | null
    createdAt: Date | null
    pacoteId: string | null
  }

  export type PacoteAnexoMaxAggregateOutputType = {
    id: string | null
    nomeOriginal: string | null
    caminho: string | null
    mimeType: string | null
    tamanhoBytes: number | null
    createdAt: Date | null
    pacoteId: string | null
  }

  export type PacoteAnexoCountAggregateOutputType = {
    id: number
    nomeOriginal: number
    caminho: number
    mimeType: number
    tamanhoBytes: number
    createdAt: number
    pacoteId: number
    _all: number
  }


  export type PacoteAnexoAvgAggregateInputType = {
    tamanhoBytes?: true
  }

  export type PacoteAnexoSumAggregateInputType = {
    tamanhoBytes?: true
  }

  export type PacoteAnexoMinAggregateInputType = {
    id?: true
    nomeOriginal?: true
    caminho?: true
    mimeType?: true
    tamanhoBytes?: true
    createdAt?: true
    pacoteId?: true
  }

  export type PacoteAnexoMaxAggregateInputType = {
    id?: true
    nomeOriginal?: true
    caminho?: true
    mimeType?: true
    tamanhoBytes?: true
    createdAt?: true
    pacoteId?: true
  }

  export type PacoteAnexoCountAggregateInputType = {
    id?: true
    nomeOriginal?: true
    caminho?: true
    mimeType?: true
    tamanhoBytes?: true
    createdAt?: true
    pacoteId?: true
    _all?: true
  }

  export type PacoteAnexoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PacoteAnexo to aggregate.
     */
    where?: PacoteAnexoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PacoteAnexos to fetch.
     */
    orderBy?: PacoteAnexoOrderByWithRelationInput | PacoteAnexoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PacoteAnexoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PacoteAnexos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PacoteAnexos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PacoteAnexos
    **/
    _count?: true | PacoteAnexoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PacoteAnexoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PacoteAnexoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PacoteAnexoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PacoteAnexoMaxAggregateInputType
  }

  export type GetPacoteAnexoAggregateType<T extends PacoteAnexoAggregateArgs> = {
        [P in keyof T & keyof AggregatePacoteAnexo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePacoteAnexo[P]>
      : GetScalarType<T[P], AggregatePacoteAnexo[P]>
  }




  export type PacoteAnexoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PacoteAnexoWhereInput
    orderBy?: PacoteAnexoOrderByWithAggregationInput | PacoteAnexoOrderByWithAggregationInput[]
    by: PacoteAnexoScalarFieldEnum[] | PacoteAnexoScalarFieldEnum
    having?: PacoteAnexoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PacoteAnexoCountAggregateInputType | true
    _avg?: PacoteAnexoAvgAggregateInputType
    _sum?: PacoteAnexoSumAggregateInputType
    _min?: PacoteAnexoMinAggregateInputType
    _max?: PacoteAnexoMaxAggregateInputType
  }

  export type PacoteAnexoGroupByOutputType = {
    id: string
    nomeOriginal: string
    caminho: string
    mimeType: string
    tamanhoBytes: number
    createdAt: Date
    pacoteId: string
    _count: PacoteAnexoCountAggregateOutputType | null
    _avg: PacoteAnexoAvgAggregateOutputType | null
    _sum: PacoteAnexoSumAggregateOutputType | null
    _min: PacoteAnexoMinAggregateOutputType | null
    _max: PacoteAnexoMaxAggregateOutputType | null
  }

  type GetPacoteAnexoGroupByPayload<T extends PacoteAnexoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PacoteAnexoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PacoteAnexoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PacoteAnexoGroupByOutputType[P]>
            : GetScalarType<T[P], PacoteAnexoGroupByOutputType[P]>
        }
      >
    >


  export type PacoteAnexoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeOriginal?: boolean
    caminho?: boolean
    mimeType?: boolean
    tamanhoBytes?: boolean
    createdAt?: boolean
    pacoteId?: boolean
    pacote?: boolean | PacoteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pacoteAnexo"]>

  export type PacoteAnexoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeOriginal?: boolean
    caminho?: boolean
    mimeType?: boolean
    tamanhoBytes?: boolean
    createdAt?: boolean
    pacoteId?: boolean
    pacote?: boolean | PacoteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pacoteAnexo"]>

  export type PacoteAnexoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeOriginal?: boolean
    caminho?: boolean
    mimeType?: boolean
    tamanhoBytes?: boolean
    createdAt?: boolean
    pacoteId?: boolean
    pacote?: boolean | PacoteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pacoteAnexo"]>

  export type PacoteAnexoSelectScalar = {
    id?: boolean
    nomeOriginal?: boolean
    caminho?: boolean
    mimeType?: boolean
    tamanhoBytes?: boolean
    createdAt?: boolean
    pacoteId?: boolean
  }

  export type PacoteAnexoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nomeOriginal" | "caminho" | "mimeType" | "tamanhoBytes" | "createdAt" | "pacoteId", ExtArgs["result"]["pacoteAnexo"]>
  export type PacoteAnexoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacote?: boolean | PacoteDefaultArgs<ExtArgs>
  }
  export type PacoteAnexoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacote?: boolean | PacoteDefaultArgs<ExtArgs>
  }
  export type PacoteAnexoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacote?: boolean | PacoteDefaultArgs<ExtArgs>
  }

  export type $PacoteAnexoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PacoteAnexo"
    objects: {
      pacote: Prisma.$PacotePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nomeOriginal: string
      caminho: string
      mimeType: string
      tamanhoBytes: number
      createdAt: Date
      pacoteId: string
    }, ExtArgs["result"]["pacoteAnexo"]>
    composites: {}
  }

  type PacoteAnexoGetPayload<S extends boolean | null | undefined | PacoteAnexoDefaultArgs> = $Result.GetResult<Prisma.$PacoteAnexoPayload, S>

  type PacoteAnexoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PacoteAnexoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PacoteAnexoCountAggregateInputType | true
    }

  export interface PacoteAnexoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PacoteAnexo'], meta: { name: 'PacoteAnexo' } }
    /**
     * Find zero or one PacoteAnexo that matches the filter.
     * @param {PacoteAnexoFindUniqueArgs} args - Arguments to find a PacoteAnexo
     * @example
     * // Get one PacoteAnexo
     * const pacoteAnexo = await prisma.pacoteAnexo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PacoteAnexoFindUniqueArgs>(args: SelectSubset<T, PacoteAnexoFindUniqueArgs<ExtArgs>>): Prisma__PacoteAnexoClient<$Result.GetResult<Prisma.$PacoteAnexoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PacoteAnexo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PacoteAnexoFindUniqueOrThrowArgs} args - Arguments to find a PacoteAnexo
     * @example
     * // Get one PacoteAnexo
     * const pacoteAnexo = await prisma.pacoteAnexo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PacoteAnexoFindUniqueOrThrowArgs>(args: SelectSubset<T, PacoteAnexoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PacoteAnexoClient<$Result.GetResult<Prisma.$PacoteAnexoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PacoteAnexo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacoteAnexoFindFirstArgs} args - Arguments to find a PacoteAnexo
     * @example
     * // Get one PacoteAnexo
     * const pacoteAnexo = await prisma.pacoteAnexo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PacoteAnexoFindFirstArgs>(args?: SelectSubset<T, PacoteAnexoFindFirstArgs<ExtArgs>>): Prisma__PacoteAnexoClient<$Result.GetResult<Prisma.$PacoteAnexoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PacoteAnexo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacoteAnexoFindFirstOrThrowArgs} args - Arguments to find a PacoteAnexo
     * @example
     * // Get one PacoteAnexo
     * const pacoteAnexo = await prisma.pacoteAnexo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PacoteAnexoFindFirstOrThrowArgs>(args?: SelectSubset<T, PacoteAnexoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PacoteAnexoClient<$Result.GetResult<Prisma.$PacoteAnexoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PacoteAnexos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacoteAnexoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PacoteAnexos
     * const pacoteAnexos = await prisma.pacoteAnexo.findMany()
     * 
     * // Get first 10 PacoteAnexos
     * const pacoteAnexos = await prisma.pacoteAnexo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pacoteAnexoWithIdOnly = await prisma.pacoteAnexo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PacoteAnexoFindManyArgs>(args?: SelectSubset<T, PacoteAnexoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacoteAnexoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PacoteAnexo.
     * @param {PacoteAnexoCreateArgs} args - Arguments to create a PacoteAnexo.
     * @example
     * // Create one PacoteAnexo
     * const PacoteAnexo = await prisma.pacoteAnexo.create({
     *   data: {
     *     // ... data to create a PacoteAnexo
     *   }
     * })
     * 
     */
    create<T extends PacoteAnexoCreateArgs>(args: SelectSubset<T, PacoteAnexoCreateArgs<ExtArgs>>): Prisma__PacoteAnexoClient<$Result.GetResult<Prisma.$PacoteAnexoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PacoteAnexos.
     * @param {PacoteAnexoCreateManyArgs} args - Arguments to create many PacoteAnexos.
     * @example
     * // Create many PacoteAnexos
     * const pacoteAnexo = await prisma.pacoteAnexo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PacoteAnexoCreateManyArgs>(args?: SelectSubset<T, PacoteAnexoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PacoteAnexos and returns the data saved in the database.
     * @param {PacoteAnexoCreateManyAndReturnArgs} args - Arguments to create many PacoteAnexos.
     * @example
     * // Create many PacoteAnexos
     * const pacoteAnexo = await prisma.pacoteAnexo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PacoteAnexos and only return the `id`
     * const pacoteAnexoWithIdOnly = await prisma.pacoteAnexo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PacoteAnexoCreateManyAndReturnArgs>(args?: SelectSubset<T, PacoteAnexoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacoteAnexoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PacoteAnexo.
     * @param {PacoteAnexoDeleteArgs} args - Arguments to delete one PacoteAnexo.
     * @example
     * // Delete one PacoteAnexo
     * const PacoteAnexo = await prisma.pacoteAnexo.delete({
     *   where: {
     *     // ... filter to delete one PacoteAnexo
     *   }
     * })
     * 
     */
    delete<T extends PacoteAnexoDeleteArgs>(args: SelectSubset<T, PacoteAnexoDeleteArgs<ExtArgs>>): Prisma__PacoteAnexoClient<$Result.GetResult<Prisma.$PacoteAnexoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PacoteAnexo.
     * @param {PacoteAnexoUpdateArgs} args - Arguments to update one PacoteAnexo.
     * @example
     * // Update one PacoteAnexo
     * const pacoteAnexo = await prisma.pacoteAnexo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PacoteAnexoUpdateArgs>(args: SelectSubset<T, PacoteAnexoUpdateArgs<ExtArgs>>): Prisma__PacoteAnexoClient<$Result.GetResult<Prisma.$PacoteAnexoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PacoteAnexos.
     * @param {PacoteAnexoDeleteManyArgs} args - Arguments to filter PacoteAnexos to delete.
     * @example
     * // Delete a few PacoteAnexos
     * const { count } = await prisma.pacoteAnexo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PacoteAnexoDeleteManyArgs>(args?: SelectSubset<T, PacoteAnexoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PacoteAnexos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacoteAnexoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PacoteAnexos
     * const pacoteAnexo = await prisma.pacoteAnexo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PacoteAnexoUpdateManyArgs>(args: SelectSubset<T, PacoteAnexoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PacoteAnexos and returns the data updated in the database.
     * @param {PacoteAnexoUpdateManyAndReturnArgs} args - Arguments to update many PacoteAnexos.
     * @example
     * // Update many PacoteAnexos
     * const pacoteAnexo = await prisma.pacoteAnexo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PacoteAnexos and only return the `id`
     * const pacoteAnexoWithIdOnly = await prisma.pacoteAnexo.updateManyAndReturn({
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
    updateManyAndReturn<T extends PacoteAnexoUpdateManyAndReturnArgs>(args: SelectSubset<T, PacoteAnexoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacoteAnexoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PacoteAnexo.
     * @param {PacoteAnexoUpsertArgs} args - Arguments to update or create a PacoteAnexo.
     * @example
     * // Update or create a PacoteAnexo
     * const pacoteAnexo = await prisma.pacoteAnexo.upsert({
     *   create: {
     *     // ... data to create a PacoteAnexo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PacoteAnexo we want to update
     *   }
     * })
     */
    upsert<T extends PacoteAnexoUpsertArgs>(args: SelectSubset<T, PacoteAnexoUpsertArgs<ExtArgs>>): Prisma__PacoteAnexoClient<$Result.GetResult<Prisma.$PacoteAnexoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PacoteAnexos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacoteAnexoCountArgs} args - Arguments to filter PacoteAnexos to count.
     * @example
     * // Count the number of PacoteAnexos
     * const count = await prisma.pacoteAnexo.count({
     *   where: {
     *     // ... the filter for the PacoteAnexos we want to count
     *   }
     * })
    **/
    count<T extends PacoteAnexoCountArgs>(
      args?: Subset<T, PacoteAnexoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PacoteAnexoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PacoteAnexo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacoteAnexoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PacoteAnexoAggregateArgs>(args: Subset<T, PacoteAnexoAggregateArgs>): Prisma.PrismaPromise<GetPacoteAnexoAggregateType<T>>

    /**
     * Group by PacoteAnexo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacoteAnexoGroupByArgs} args - Group by arguments.
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
      T extends PacoteAnexoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PacoteAnexoGroupByArgs['orderBy'] }
        : { orderBy?: PacoteAnexoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PacoteAnexoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPacoteAnexoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PacoteAnexo model
   */
  readonly fields: PacoteAnexoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PacoteAnexo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PacoteAnexoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pacote<T extends PacoteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PacoteDefaultArgs<ExtArgs>>): Prisma__PacoteClient<$Result.GetResult<Prisma.$PacotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PacoteAnexo model
   */
  interface PacoteAnexoFieldRefs {
    readonly id: FieldRef<"PacoteAnexo", 'String'>
    readonly nomeOriginal: FieldRef<"PacoteAnexo", 'String'>
    readonly caminho: FieldRef<"PacoteAnexo", 'String'>
    readonly mimeType: FieldRef<"PacoteAnexo", 'String'>
    readonly tamanhoBytes: FieldRef<"PacoteAnexo", 'Int'>
    readonly createdAt: FieldRef<"PacoteAnexo", 'DateTime'>
    readonly pacoteId: FieldRef<"PacoteAnexo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PacoteAnexo findUnique
   */
  export type PacoteAnexoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacoteAnexo
     */
    select?: PacoteAnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacoteAnexo
     */
    omit?: PacoteAnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteAnexoInclude<ExtArgs> | null
    /**
     * Filter, which PacoteAnexo to fetch.
     */
    where: PacoteAnexoWhereUniqueInput
  }

  /**
   * PacoteAnexo findUniqueOrThrow
   */
  export type PacoteAnexoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacoteAnexo
     */
    select?: PacoteAnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacoteAnexo
     */
    omit?: PacoteAnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteAnexoInclude<ExtArgs> | null
    /**
     * Filter, which PacoteAnexo to fetch.
     */
    where: PacoteAnexoWhereUniqueInput
  }

  /**
   * PacoteAnexo findFirst
   */
  export type PacoteAnexoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacoteAnexo
     */
    select?: PacoteAnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacoteAnexo
     */
    omit?: PacoteAnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteAnexoInclude<ExtArgs> | null
    /**
     * Filter, which PacoteAnexo to fetch.
     */
    where?: PacoteAnexoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PacoteAnexos to fetch.
     */
    orderBy?: PacoteAnexoOrderByWithRelationInput | PacoteAnexoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PacoteAnexos.
     */
    cursor?: PacoteAnexoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PacoteAnexos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PacoteAnexos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PacoteAnexos.
     */
    distinct?: PacoteAnexoScalarFieldEnum | PacoteAnexoScalarFieldEnum[]
  }

  /**
   * PacoteAnexo findFirstOrThrow
   */
  export type PacoteAnexoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacoteAnexo
     */
    select?: PacoteAnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacoteAnexo
     */
    omit?: PacoteAnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteAnexoInclude<ExtArgs> | null
    /**
     * Filter, which PacoteAnexo to fetch.
     */
    where?: PacoteAnexoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PacoteAnexos to fetch.
     */
    orderBy?: PacoteAnexoOrderByWithRelationInput | PacoteAnexoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PacoteAnexos.
     */
    cursor?: PacoteAnexoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PacoteAnexos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PacoteAnexos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PacoteAnexos.
     */
    distinct?: PacoteAnexoScalarFieldEnum | PacoteAnexoScalarFieldEnum[]
  }

  /**
   * PacoteAnexo findMany
   */
  export type PacoteAnexoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacoteAnexo
     */
    select?: PacoteAnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacoteAnexo
     */
    omit?: PacoteAnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteAnexoInclude<ExtArgs> | null
    /**
     * Filter, which PacoteAnexos to fetch.
     */
    where?: PacoteAnexoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PacoteAnexos to fetch.
     */
    orderBy?: PacoteAnexoOrderByWithRelationInput | PacoteAnexoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PacoteAnexos.
     */
    cursor?: PacoteAnexoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PacoteAnexos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PacoteAnexos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PacoteAnexos.
     */
    distinct?: PacoteAnexoScalarFieldEnum | PacoteAnexoScalarFieldEnum[]
  }

  /**
   * PacoteAnexo create
   */
  export type PacoteAnexoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacoteAnexo
     */
    select?: PacoteAnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacoteAnexo
     */
    omit?: PacoteAnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteAnexoInclude<ExtArgs> | null
    /**
     * The data needed to create a PacoteAnexo.
     */
    data: XOR<PacoteAnexoCreateInput, PacoteAnexoUncheckedCreateInput>
  }

  /**
   * PacoteAnexo createMany
   */
  export type PacoteAnexoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PacoteAnexos.
     */
    data: PacoteAnexoCreateManyInput | PacoteAnexoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PacoteAnexo createManyAndReturn
   */
  export type PacoteAnexoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacoteAnexo
     */
    select?: PacoteAnexoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PacoteAnexo
     */
    omit?: PacoteAnexoOmit<ExtArgs> | null
    /**
     * The data used to create many PacoteAnexos.
     */
    data: PacoteAnexoCreateManyInput | PacoteAnexoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteAnexoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PacoteAnexo update
   */
  export type PacoteAnexoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacoteAnexo
     */
    select?: PacoteAnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacoteAnexo
     */
    omit?: PacoteAnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteAnexoInclude<ExtArgs> | null
    /**
     * The data needed to update a PacoteAnexo.
     */
    data: XOR<PacoteAnexoUpdateInput, PacoteAnexoUncheckedUpdateInput>
    /**
     * Choose, which PacoteAnexo to update.
     */
    where: PacoteAnexoWhereUniqueInput
  }

  /**
   * PacoteAnexo updateMany
   */
  export type PacoteAnexoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PacoteAnexos.
     */
    data: XOR<PacoteAnexoUpdateManyMutationInput, PacoteAnexoUncheckedUpdateManyInput>
    /**
     * Filter which PacoteAnexos to update
     */
    where?: PacoteAnexoWhereInput
    /**
     * Limit how many PacoteAnexos to update.
     */
    limit?: number
  }

  /**
   * PacoteAnexo updateManyAndReturn
   */
  export type PacoteAnexoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacoteAnexo
     */
    select?: PacoteAnexoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PacoteAnexo
     */
    omit?: PacoteAnexoOmit<ExtArgs> | null
    /**
     * The data used to update PacoteAnexos.
     */
    data: XOR<PacoteAnexoUpdateManyMutationInput, PacoteAnexoUncheckedUpdateManyInput>
    /**
     * Filter which PacoteAnexos to update
     */
    where?: PacoteAnexoWhereInput
    /**
     * Limit how many PacoteAnexos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteAnexoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PacoteAnexo upsert
   */
  export type PacoteAnexoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacoteAnexo
     */
    select?: PacoteAnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacoteAnexo
     */
    omit?: PacoteAnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteAnexoInclude<ExtArgs> | null
    /**
     * The filter to search for the PacoteAnexo to update in case it exists.
     */
    where: PacoteAnexoWhereUniqueInput
    /**
     * In case the PacoteAnexo found by the `where` argument doesn't exist, create a new PacoteAnexo with this data.
     */
    create: XOR<PacoteAnexoCreateInput, PacoteAnexoUncheckedCreateInput>
    /**
     * In case the PacoteAnexo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PacoteAnexoUpdateInput, PacoteAnexoUncheckedUpdateInput>
  }

  /**
   * PacoteAnexo delete
   */
  export type PacoteAnexoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacoteAnexo
     */
    select?: PacoteAnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacoteAnexo
     */
    omit?: PacoteAnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteAnexoInclude<ExtArgs> | null
    /**
     * Filter which PacoteAnexo to delete.
     */
    where: PacoteAnexoWhereUniqueInput
  }

  /**
   * PacoteAnexo deleteMany
   */
  export type PacoteAnexoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PacoteAnexos to delete
     */
    where?: PacoteAnexoWhereInput
    /**
     * Limit how many PacoteAnexos to delete.
     */
    limit?: number
  }

  /**
   * PacoteAnexo without action
   */
  export type PacoteAnexoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacoteAnexo
     */
    select?: PacoteAnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacoteAnexo
     */
    omit?: PacoteAnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacoteAnexoInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    name: 'name',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PacoteScalarFieldEnum: {
    id: 'id',
    nomePacote: 'nomePacote',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdById: 'createdById'
  };

  export type PacoteScalarFieldEnum = (typeof PacoteScalarFieldEnum)[keyof typeof PacoteScalarFieldEnum]


  export const PacoteCnpjScalarFieldEnum: {
    id: 'id',
    cnpj: 'cnpj',
    pacoteId: 'pacoteId'
  };

  export type PacoteCnpjScalarFieldEnum = (typeof PacoteCnpjScalarFieldEnum)[keyof typeof PacoteCnpjScalarFieldEnum]


  export const PacoteHospitalScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    pacoteId: 'pacoteId'
  };

  export type PacoteHospitalScalarFieldEnum = (typeof PacoteHospitalScalarFieldEnum)[keyof typeof PacoteHospitalScalarFieldEnum]


  export const PacoteContemplacaoScalarFieldEnum: {
    id: 'id',
    codigo: 'codigo',
    descricao: 'descricao',
    valor: 'valor',
    pacoteId: 'pacoteId'
  };

  export type PacoteContemplacaoScalarFieldEnum = (typeof PacoteContemplacaoScalarFieldEnum)[keyof typeof PacoteContemplacaoScalarFieldEnum]


  export const PacoteAnexoScalarFieldEnum: {
    id: 'id',
    nomeOriginal: 'nomeOriginal',
    caminho: 'caminho',
    mimeType: 'mimeType',
    tamanhoBytes: 'tamanhoBytes',
    createdAt: 'createdAt',
    pacoteId: 'pacoteId'
  };

  export type PacoteAnexoScalarFieldEnum = (typeof PacoteAnexoScalarFieldEnum)[keyof typeof PacoteAnexoScalarFieldEnum]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    pacotesCriados?: PacoteListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pacotesCriados?: PacoteOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    pacotesCriados?: PacoteListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PacoteWhereInput = {
    AND?: PacoteWhereInput | PacoteWhereInput[]
    OR?: PacoteWhereInput[]
    NOT?: PacoteWhereInput | PacoteWhereInput[]
    id?: StringFilter<"Pacote"> | string
    nomePacote?: StringFilter<"Pacote"> | string
    createdAt?: DateTimeFilter<"Pacote"> | Date | string
    updatedAt?: DateTimeFilter<"Pacote"> | Date | string
    createdById?: StringFilter<"Pacote"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    cnpjs?: PacoteCnpjListRelationFilter
    hospitais?: PacoteHospitalListRelationFilter
    contemplacoes?: PacoteContemplacaoListRelationFilter
    anexos?: PacoteAnexoListRelationFilter
  }

  export type PacoteOrderByWithRelationInput = {
    id?: SortOrder
    nomePacote?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    cnpjs?: PacoteCnpjOrderByRelationAggregateInput
    hospitais?: PacoteHospitalOrderByRelationAggregateInput
    contemplacoes?: PacoteContemplacaoOrderByRelationAggregateInput
    anexos?: PacoteAnexoOrderByRelationAggregateInput
  }

  export type PacoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PacoteWhereInput | PacoteWhereInput[]
    OR?: PacoteWhereInput[]
    NOT?: PacoteWhereInput | PacoteWhereInput[]
    nomePacote?: StringFilter<"Pacote"> | string
    createdAt?: DateTimeFilter<"Pacote"> | Date | string
    updatedAt?: DateTimeFilter<"Pacote"> | Date | string
    createdById?: StringFilter<"Pacote"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    cnpjs?: PacoteCnpjListRelationFilter
    hospitais?: PacoteHospitalListRelationFilter
    contemplacoes?: PacoteContemplacaoListRelationFilter
    anexos?: PacoteAnexoListRelationFilter
  }, "id">

  export type PacoteOrderByWithAggregationInput = {
    id?: SortOrder
    nomePacote?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    _count?: PacoteCountOrderByAggregateInput
    _max?: PacoteMaxOrderByAggregateInput
    _min?: PacoteMinOrderByAggregateInput
  }

  export type PacoteScalarWhereWithAggregatesInput = {
    AND?: PacoteScalarWhereWithAggregatesInput | PacoteScalarWhereWithAggregatesInput[]
    OR?: PacoteScalarWhereWithAggregatesInput[]
    NOT?: PacoteScalarWhereWithAggregatesInput | PacoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pacote"> | string
    nomePacote?: StringWithAggregatesFilter<"Pacote"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Pacote"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Pacote"> | Date | string
    createdById?: StringWithAggregatesFilter<"Pacote"> | string
  }

  export type PacoteCnpjWhereInput = {
    AND?: PacoteCnpjWhereInput | PacoteCnpjWhereInput[]
    OR?: PacoteCnpjWhereInput[]
    NOT?: PacoteCnpjWhereInput | PacoteCnpjWhereInput[]
    id?: StringFilter<"PacoteCnpj"> | string
    cnpj?: StringFilter<"PacoteCnpj"> | string
    pacoteId?: StringFilter<"PacoteCnpj"> | string
    pacote?: XOR<PacoteScalarRelationFilter, PacoteWhereInput>
  }

  export type PacoteCnpjOrderByWithRelationInput = {
    id?: SortOrder
    cnpj?: SortOrder
    pacoteId?: SortOrder
    pacote?: PacoteOrderByWithRelationInput
  }

  export type PacoteCnpjWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    pacoteId_cnpj?: PacoteCnpjPacoteIdCnpjCompoundUniqueInput
    AND?: PacoteCnpjWhereInput | PacoteCnpjWhereInput[]
    OR?: PacoteCnpjWhereInput[]
    NOT?: PacoteCnpjWhereInput | PacoteCnpjWhereInput[]
    cnpj?: StringFilter<"PacoteCnpj"> | string
    pacoteId?: StringFilter<"PacoteCnpj"> | string
    pacote?: XOR<PacoteScalarRelationFilter, PacoteWhereInput>
  }, "id" | "pacoteId_cnpj">

  export type PacoteCnpjOrderByWithAggregationInput = {
    id?: SortOrder
    cnpj?: SortOrder
    pacoteId?: SortOrder
    _count?: PacoteCnpjCountOrderByAggregateInput
    _max?: PacoteCnpjMaxOrderByAggregateInput
    _min?: PacoteCnpjMinOrderByAggregateInput
  }

  export type PacoteCnpjScalarWhereWithAggregatesInput = {
    AND?: PacoteCnpjScalarWhereWithAggregatesInput | PacoteCnpjScalarWhereWithAggregatesInput[]
    OR?: PacoteCnpjScalarWhereWithAggregatesInput[]
    NOT?: PacoteCnpjScalarWhereWithAggregatesInput | PacoteCnpjScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PacoteCnpj"> | string
    cnpj?: StringWithAggregatesFilter<"PacoteCnpj"> | string
    pacoteId?: StringWithAggregatesFilter<"PacoteCnpj"> | string
  }

  export type PacoteHospitalWhereInput = {
    AND?: PacoteHospitalWhereInput | PacoteHospitalWhereInput[]
    OR?: PacoteHospitalWhereInput[]
    NOT?: PacoteHospitalWhereInput | PacoteHospitalWhereInput[]
    id?: StringFilter<"PacoteHospital"> | string
    nome?: StringFilter<"PacoteHospital"> | string
    pacoteId?: StringFilter<"PacoteHospital"> | string
    pacote?: XOR<PacoteScalarRelationFilter, PacoteWhereInput>
  }

  export type PacoteHospitalOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    pacoteId?: SortOrder
    pacote?: PacoteOrderByWithRelationInput
  }

  export type PacoteHospitalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PacoteHospitalWhereInput | PacoteHospitalWhereInput[]
    OR?: PacoteHospitalWhereInput[]
    NOT?: PacoteHospitalWhereInput | PacoteHospitalWhereInput[]
    nome?: StringFilter<"PacoteHospital"> | string
    pacoteId?: StringFilter<"PacoteHospital"> | string
    pacote?: XOR<PacoteScalarRelationFilter, PacoteWhereInput>
  }, "id">

  export type PacoteHospitalOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    pacoteId?: SortOrder
    _count?: PacoteHospitalCountOrderByAggregateInput
    _max?: PacoteHospitalMaxOrderByAggregateInput
    _min?: PacoteHospitalMinOrderByAggregateInput
  }

  export type PacoteHospitalScalarWhereWithAggregatesInput = {
    AND?: PacoteHospitalScalarWhereWithAggregatesInput | PacoteHospitalScalarWhereWithAggregatesInput[]
    OR?: PacoteHospitalScalarWhereWithAggregatesInput[]
    NOT?: PacoteHospitalScalarWhereWithAggregatesInput | PacoteHospitalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PacoteHospital"> | string
    nome?: StringWithAggregatesFilter<"PacoteHospital"> | string
    pacoteId?: StringWithAggregatesFilter<"PacoteHospital"> | string
  }

  export type PacoteContemplacaoWhereInput = {
    AND?: PacoteContemplacaoWhereInput | PacoteContemplacaoWhereInput[]
    OR?: PacoteContemplacaoWhereInput[]
    NOT?: PacoteContemplacaoWhereInput | PacoteContemplacaoWhereInput[]
    id?: StringFilter<"PacoteContemplacao"> | string
    codigo?: StringFilter<"PacoteContemplacao"> | string
    descricao?: StringFilter<"PacoteContemplacao"> | string
    valor?: StringFilter<"PacoteContemplacao"> | string
    pacoteId?: StringFilter<"PacoteContemplacao"> | string
    pacote?: XOR<PacoteScalarRelationFilter, PacoteWhereInput>
  }

  export type PacoteContemplacaoOrderByWithRelationInput = {
    id?: SortOrder
    codigo?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    pacoteId?: SortOrder
    pacote?: PacoteOrderByWithRelationInput
  }

  export type PacoteContemplacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PacoteContemplacaoWhereInput | PacoteContemplacaoWhereInput[]
    OR?: PacoteContemplacaoWhereInput[]
    NOT?: PacoteContemplacaoWhereInput | PacoteContemplacaoWhereInput[]
    codigo?: StringFilter<"PacoteContemplacao"> | string
    descricao?: StringFilter<"PacoteContemplacao"> | string
    valor?: StringFilter<"PacoteContemplacao"> | string
    pacoteId?: StringFilter<"PacoteContemplacao"> | string
    pacote?: XOR<PacoteScalarRelationFilter, PacoteWhereInput>
  }, "id">

  export type PacoteContemplacaoOrderByWithAggregationInput = {
    id?: SortOrder
    codigo?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    pacoteId?: SortOrder
    _count?: PacoteContemplacaoCountOrderByAggregateInput
    _max?: PacoteContemplacaoMaxOrderByAggregateInput
    _min?: PacoteContemplacaoMinOrderByAggregateInput
  }

  export type PacoteContemplacaoScalarWhereWithAggregatesInput = {
    AND?: PacoteContemplacaoScalarWhereWithAggregatesInput | PacoteContemplacaoScalarWhereWithAggregatesInput[]
    OR?: PacoteContemplacaoScalarWhereWithAggregatesInput[]
    NOT?: PacoteContemplacaoScalarWhereWithAggregatesInput | PacoteContemplacaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PacoteContemplacao"> | string
    codigo?: StringWithAggregatesFilter<"PacoteContemplacao"> | string
    descricao?: StringWithAggregatesFilter<"PacoteContemplacao"> | string
    valor?: StringWithAggregatesFilter<"PacoteContemplacao"> | string
    pacoteId?: StringWithAggregatesFilter<"PacoteContemplacao"> | string
  }

  export type PacoteAnexoWhereInput = {
    AND?: PacoteAnexoWhereInput | PacoteAnexoWhereInput[]
    OR?: PacoteAnexoWhereInput[]
    NOT?: PacoteAnexoWhereInput | PacoteAnexoWhereInput[]
    id?: StringFilter<"PacoteAnexo"> | string
    nomeOriginal?: StringFilter<"PacoteAnexo"> | string
    caminho?: StringFilter<"PacoteAnexo"> | string
    mimeType?: StringFilter<"PacoteAnexo"> | string
    tamanhoBytes?: IntFilter<"PacoteAnexo"> | number
    createdAt?: DateTimeFilter<"PacoteAnexo"> | Date | string
    pacoteId?: StringFilter<"PacoteAnexo"> | string
    pacote?: XOR<PacoteScalarRelationFilter, PacoteWhereInput>
  }

  export type PacoteAnexoOrderByWithRelationInput = {
    id?: SortOrder
    nomeOriginal?: SortOrder
    caminho?: SortOrder
    mimeType?: SortOrder
    tamanhoBytes?: SortOrder
    createdAt?: SortOrder
    pacoteId?: SortOrder
    pacote?: PacoteOrderByWithRelationInput
  }

  export type PacoteAnexoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PacoteAnexoWhereInput | PacoteAnexoWhereInput[]
    OR?: PacoteAnexoWhereInput[]
    NOT?: PacoteAnexoWhereInput | PacoteAnexoWhereInput[]
    nomeOriginal?: StringFilter<"PacoteAnexo"> | string
    caminho?: StringFilter<"PacoteAnexo"> | string
    mimeType?: StringFilter<"PacoteAnexo"> | string
    tamanhoBytes?: IntFilter<"PacoteAnexo"> | number
    createdAt?: DateTimeFilter<"PacoteAnexo"> | Date | string
    pacoteId?: StringFilter<"PacoteAnexo"> | string
    pacote?: XOR<PacoteScalarRelationFilter, PacoteWhereInput>
  }, "id">

  export type PacoteAnexoOrderByWithAggregationInput = {
    id?: SortOrder
    nomeOriginal?: SortOrder
    caminho?: SortOrder
    mimeType?: SortOrder
    tamanhoBytes?: SortOrder
    createdAt?: SortOrder
    pacoteId?: SortOrder
    _count?: PacoteAnexoCountOrderByAggregateInput
    _avg?: PacoteAnexoAvgOrderByAggregateInput
    _max?: PacoteAnexoMaxOrderByAggregateInput
    _min?: PacoteAnexoMinOrderByAggregateInput
    _sum?: PacoteAnexoSumOrderByAggregateInput
  }

  export type PacoteAnexoScalarWhereWithAggregatesInput = {
    AND?: PacoteAnexoScalarWhereWithAggregatesInput | PacoteAnexoScalarWhereWithAggregatesInput[]
    OR?: PacoteAnexoScalarWhereWithAggregatesInput[]
    NOT?: PacoteAnexoScalarWhereWithAggregatesInput | PacoteAnexoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PacoteAnexo"> | string
    nomeOriginal?: StringWithAggregatesFilter<"PacoteAnexo"> | string
    caminho?: StringWithAggregatesFilter<"PacoteAnexo"> | string
    mimeType?: StringWithAggregatesFilter<"PacoteAnexo"> | string
    tamanhoBytes?: IntWithAggregatesFilter<"PacoteAnexo"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PacoteAnexo"> | Date | string
    pacoteId?: StringWithAggregatesFilter<"PacoteAnexo"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    pacotesCriados?: PacoteCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    pacotesCriados?: PacoteUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pacotesCriados?: PacoteUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pacotesCriados?: PacoteUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PacoteCreateInput = {
    id?: string
    nomePacote: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutPacotesCriadosInput
    cnpjs?: PacoteCnpjCreateNestedManyWithoutPacoteInput
    hospitais?: PacoteHospitalCreateNestedManyWithoutPacoteInput
    contemplacoes?: PacoteContemplacaoCreateNestedManyWithoutPacoteInput
    anexos?: PacoteAnexoCreateNestedManyWithoutPacoteInput
  }

  export type PacoteUncheckedCreateInput = {
    id?: string
    nomePacote: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
    cnpjs?: PacoteCnpjUncheckedCreateNestedManyWithoutPacoteInput
    hospitais?: PacoteHospitalUncheckedCreateNestedManyWithoutPacoteInput
    contemplacoes?: PacoteContemplacaoUncheckedCreateNestedManyWithoutPacoteInput
    anexos?: PacoteAnexoUncheckedCreateNestedManyWithoutPacoteInput
  }

  export type PacoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomePacote?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutPacotesCriadosNestedInput
    cnpjs?: PacoteCnpjUpdateManyWithoutPacoteNestedInput
    hospitais?: PacoteHospitalUpdateManyWithoutPacoteNestedInput
    contemplacoes?: PacoteContemplacaoUpdateManyWithoutPacoteNestedInput
    anexos?: PacoteAnexoUpdateManyWithoutPacoteNestedInput
  }

  export type PacoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomePacote?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    cnpjs?: PacoteCnpjUncheckedUpdateManyWithoutPacoteNestedInput
    hospitais?: PacoteHospitalUncheckedUpdateManyWithoutPacoteNestedInput
    contemplacoes?: PacoteContemplacaoUncheckedUpdateManyWithoutPacoteNestedInput
    anexos?: PacoteAnexoUncheckedUpdateManyWithoutPacoteNestedInput
  }

  export type PacoteCreateManyInput = {
    id?: string
    nomePacote: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type PacoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomePacote?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PacoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomePacote?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type PacoteCnpjCreateInput = {
    id?: string
    cnpj: string
    pacote: PacoteCreateNestedOneWithoutCnpjsInput
  }

  export type PacoteCnpjUncheckedCreateInput = {
    id?: string
    cnpj: string
    pacoteId: string
  }

  export type PacoteCnpjUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    pacote?: PacoteUpdateOneRequiredWithoutCnpjsNestedInput
  }

  export type PacoteCnpjUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    pacoteId?: StringFieldUpdateOperationsInput | string
  }

  export type PacoteCnpjCreateManyInput = {
    id?: string
    cnpj: string
    pacoteId: string
  }

  export type PacoteCnpjUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
  }

  export type PacoteCnpjUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    pacoteId?: StringFieldUpdateOperationsInput | string
  }

  export type PacoteHospitalCreateInput = {
    id?: string
    nome: string
    pacote: PacoteCreateNestedOneWithoutHospitaisInput
  }

  export type PacoteHospitalUncheckedCreateInput = {
    id?: string
    nome: string
    pacoteId: string
  }

  export type PacoteHospitalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    pacote?: PacoteUpdateOneRequiredWithoutHospitaisNestedInput
  }

  export type PacoteHospitalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    pacoteId?: StringFieldUpdateOperationsInput | string
  }

  export type PacoteHospitalCreateManyInput = {
    id?: string
    nome: string
    pacoteId: string
  }

  export type PacoteHospitalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type PacoteHospitalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    pacoteId?: StringFieldUpdateOperationsInput | string
  }

  export type PacoteContemplacaoCreateInput = {
    id?: string
    codigo: string
    descricao: string
    valor: string
    pacote: PacoteCreateNestedOneWithoutContemplacoesInput
  }

  export type PacoteContemplacaoUncheckedCreateInput = {
    id?: string
    codigo: string
    descricao: string
    valor: string
    pacoteId: string
  }

  export type PacoteContemplacaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
    pacote?: PacoteUpdateOneRequiredWithoutContemplacoesNestedInput
  }

  export type PacoteContemplacaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
    pacoteId?: StringFieldUpdateOperationsInput | string
  }

  export type PacoteContemplacaoCreateManyInput = {
    id?: string
    codigo: string
    descricao: string
    valor: string
    pacoteId: string
  }

  export type PacoteContemplacaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
  }

  export type PacoteContemplacaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
    pacoteId?: StringFieldUpdateOperationsInput | string
  }

  export type PacoteAnexoCreateInput = {
    id?: string
    nomeOriginal: string
    caminho: string
    mimeType: string
    tamanhoBytes: number
    createdAt?: Date | string
    pacote: PacoteCreateNestedOneWithoutAnexosInput
  }

  export type PacoteAnexoUncheckedCreateInput = {
    id?: string
    nomeOriginal: string
    caminho: string
    mimeType: string
    tamanhoBytes: number
    createdAt?: Date | string
    pacoteId: string
  }

  export type PacoteAnexoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeOriginal?: StringFieldUpdateOperationsInput | string
    caminho?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    tamanhoBytes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pacote?: PacoteUpdateOneRequiredWithoutAnexosNestedInput
  }

  export type PacoteAnexoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeOriginal?: StringFieldUpdateOperationsInput | string
    caminho?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    tamanhoBytes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pacoteId?: StringFieldUpdateOperationsInput | string
  }

  export type PacoteAnexoCreateManyInput = {
    id?: string
    nomeOriginal: string
    caminho: string
    mimeType: string
    tamanhoBytes: number
    createdAt?: Date | string
    pacoteId: string
  }

  export type PacoteAnexoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeOriginal?: StringFieldUpdateOperationsInput | string
    caminho?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    tamanhoBytes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PacoteAnexoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeOriginal?: StringFieldUpdateOperationsInput | string
    caminho?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    tamanhoBytes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pacoteId?: StringFieldUpdateOperationsInput | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type PacoteListRelationFilter = {
    every?: PacoteWhereInput
    some?: PacoteWhereInput
    none?: PacoteWhereInput
  }

  export type PacoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PacoteCnpjListRelationFilter = {
    every?: PacoteCnpjWhereInput
    some?: PacoteCnpjWhereInput
    none?: PacoteCnpjWhereInput
  }

  export type PacoteHospitalListRelationFilter = {
    every?: PacoteHospitalWhereInput
    some?: PacoteHospitalWhereInput
    none?: PacoteHospitalWhereInput
  }

  export type PacoteContemplacaoListRelationFilter = {
    every?: PacoteContemplacaoWhereInput
    some?: PacoteContemplacaoWhereInput
    none?: PacoteContemplacaoWhereInput
  }

  export type PacoteAnexoListRelationFilter = {
    every?: PacoteAnexoWhereInput
    some?: PacoteAnexoWhereInput
    none?: PacoteAnexoWhereInput
  }

  export type PacoteCnpjOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PacoteHospitalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PacoteContemplacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PacoteAnexoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PacoteCountOrderByAggregateInput = {
    id?: SortOrder
    nomePacote?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type PacoteMaxOrderByAggregateInput = {
    id?: SortOrder
    nomePacote?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type PacoteMinOrderByAggregateInput = {
    id?: SortOrder
    nomePacote?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type PacoteScalarRelationFilter = {
    is?: PacoteWhereInput
    isNot?: PacoteWhereInput
  }

  export type PacoteCnpjPacoteIdCnpjCompoundUniqueInput = {
    pacoteId: string
    cnpj: string
  }

  export type PacoteCnpjCountOrderByAggregateInput = {
    id?: SortOrder
    cnpj?: SortOrder
    pacoteId?: SortOrder
  }

  export type PacoteCnpjMaxOrderByAggregateInput = {
    id?: SortOrder
    cnpj?: SortOrder
    pacoteId?: SortOrder
  }

  export type PacoteCnpjMinOrderByAggregateInput = {
    id?: SortOrder
    cnpj?: SortOrder
    pacoteId?: SortOrder
  }

  export type PacoteHospitalCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    pacoteId?: SortOrder
  }

  export type PacoteHospitalMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    pacoteId?: SortOrder
  }

  export type PacoteHospitalMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    pacoteId?: SortOrder
  }

  export type PacoteContemplacaoCountOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    pacoteId?: SortOrder
  }

  export type PacoteContemplacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    pacoteId?: SortOrder
  }

  export type PacoteContemplacaoMinOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    pacoteId?: SortOrder
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

  export type PacoteAnexoCountOrderByAggregateInput = {
    id?: SortOrder
    nomeOriginal?: SortOrder
    caminho?: SortOrder
    mimeType?: SortOrder
    tamanhoBytes?: SortOrder
    createdAt?: SortOrder
    pacoteId?: SortOrder
  }

  export type PacoteAnexoAvgOrderByAggregateInput = {
    tamanhoBytes?: SortOrder
  }

  export type PacoteAnexoMaxOrderByAggregateInput = {
    id?: SortOrder
    nomeOriginal?: SortOrder
    caminho?: SortOrder
    mimeType?: SortOrder
    tamanhoBytes?: SortOrder
    createdAt?: SortOrder
    pacoteId?: SortOrder
  }

  export type PacoteAnexoMinOrderByAggregateInput = {
    id?: SortOrder
    nomeOriginal?: SortOrder
    caminho?: SortOrder
    mimeType?: SortOrder
    tamanhoBytes?: SortOrder
    createdAt?: SortOrder
    pacoteId?: SortOrder
  }

  export type PacoteAnexoSumOrderByAggregateInput = {
    tamanhoBytes?: SortOrder
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

  export type PacoteCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<PacoteCreateWithoutCreatedByInput, PacoteUncheckedCreateWithoutCreatedByInput> | PacoteCreateWithoutCreatedByInput[] | PacoteUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PacoteCreateOrConnectWithoutCreatedByInput | PacoteCreateOrConnectWithoutCreatedByInput[]
    createMany?: PacoteCreateManyCreatedByInputEnvelope
    connect?: PacoteWhereUniqueInput | PacoteWhereUniqueInput[]
  }

  export type PacoteUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<PacoteCreateWithoutCreatedByInput, PacoteUncheckedCreateWithoutCreatedByInput> | PacoteCreateWithoutCreatedByInput[] | PacoteUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PacoteCreateOrConnectWithoutCreatedByInput | PacoteCreateOrConnectWithoutCreatedByInput[]
    createMany?: PacoteCreateManyCreatedByInputEnvelope
    connect?: PacoteWhereUniqueInput | PacoteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PacoteUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<PacoteCreateWithoutCreatedByInput, PacoteUncheckedCreateWithoutCreatedByInput> | PacoteCreateWithoutCreatedByInput[] | PacoteUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PacoteCreateOrConnectWithoutCreatedByInput | PacoteCreateOrConnectWithoutCreatedByInput[]
    upsert?: PacoteUpsertWithWhereUniqueWithoutCreatedByInput | PacoteUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: PacoteCreateManyCreatedByInputEnvelope
    set?: PacoteWhereUniqueInput | PacoteWhereUniqueInput[]
    disconnect?: PacoteWhereUniqueInput | PacoteWhereUniqueInput[]
    delete?: PacoteWhereUniqueInput | PacoteWhereUniqueInput[]
    connect?: PacoteWhereUniqueInput | PacoteWhereUniqueInput[]
    update?: PacoteUpdateWithWhereUniqueWithoutCreatedByInput | PacoteUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: PacoteUpdateManyWithWhereWithoutCreatedByInput | PacoteUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: PacoteScalarWhereInput | PacoteScalarWhereInput[]
  }

  export type PacoteUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<PacoteCreateWithoutCreatedByInput, PacoteUncheckedCreateWithoutCreatedByInput> | PacoteCreateWithoutCreatedByInput[] | PacoteUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PacoteCreateOrConnectWithoutCreatedByInput | PacoteCreateOrConnectWithoutCreatedByInput[]
    upsert?: PacoteUpsertWithWhereUniqueWithoutCreatedByInput | PacoteUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: PacoteCreateManyCreatedByInputEnvelope
    set?: PacoteWhereUniqueInput | PacoteWhereUniqueInput[]
    disconnect?: PacoteWhereUniqueInput | PacoteWhereUniqueInput[]
    delete?: PacoteWhereUniqueInput | PacoteWhereUniqueInput[]
    connect?: PacoteWhereUniqueInput | PacoteWhereUniqueInput[]
    update?: PacoteUpdateWithWhereUniqueWithoutCreatedByInput | PacoteUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: PacoteUpdateManyWithWhereWithoutCreatedByInput | PacoteUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: PacoteScalarWhereInput | PacoteScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPacotesCriadosInput = {
    create?: XOR<UserCreateWithoutPacotesCriadosInput, UserUncheckedCreateWithoutPacotesCriadosInput>
    connectOrCreate?: UserCreateOrConnectWithoutPacotesCriadosInput
    connect?: UserWhereUniqueInput
  }

  export type PacoteCnpjCreateNestedManyWithoutPacoteInput = {
    create?: XOR<PacoteCnpjCreateWithoutPacoteInput, PacoteCnpjUncheckedCreateWithoutPacoteInput> | PacoteCnpjCreateWithoutPacoteInput[] | PacoteCnpjUncheckedCreateWithoutPacoteInput[]
    connectOrCreate?: PacoteCnpjCreateOrConnectWithoutPacoteInput | PacoteCnpjCreateOrConnectWithoutPacoteInput[]
    createMany?: PacoteCnpjCreateManyPacoteInputEnvelope
    connect?: PacoteCnpjWhereUniqueInput | PacoteCnpjWhereUniqueInput[]
  }

  export type PacoteHospitalCreateNestedManyWithoutPacoteInput = {
    create?: XOR<PacoteHospitalCreateWithoutPacoteInput, PacoteHospitalUncheckedCreateWithoutPacoteInput> | PacoteHospitalCreateWithoutPacoteInput[] | PacoteHospitalUncheckedCreateWithoutPacoteInput[]
    connectOrCreate?: PacoteHospitalCreateOrConnectWithoutPacoteInput | PacoteHospitalCreateOrConnectWithoutPacoteInput[]
    createMany?: PacoteHospitalCreateManyPacoteInputEnvelope
    connect?: PacoteHospitalWhereUniqueInput | PacoteHospitalWhereUniqueInput[]
  }

  export type PacoteContemplacaoCreateNestedManyWithoutPacoteInput = {
    create?: XOR<PacoteContemplacaoCreateWithoutPacoteInput, PacoteContemplacaoUncheckedCreateWithoutPacoteInput> | PacoteContemplacaoCreateWithoutPacoteInput[] | PacoteContemplacaoUncheckedCreateWithoutPacoteInput[]
    connectOrCreate?: PacoteContemplacaoCreateOrConnectWithoutPacoteInput | PacoteContemplacaoCreateOrConnectWithoutPacoteInput[]
    createMany?: PacoteContemplacaoCreateManyPacoteInputEnvelope
    connect?: PacoteContemplacaoWhereUniqueInput | PacoteContemplacaoWhereUniqueInput[]
  }

  export type PacoteAnexoCreateNestedManyWithoutPacoteInput = {
    create?: XOR<PacoteAnexoCreateWithoutPacoteInput, PacoteAnexoUncheckedCreateWithoutPacoteInput> | PacoteAnexoCreateWithoutPacoteInput[] | PacoteAnexoUncheckedCreateWithoutPacoteInput[]
    connectOrCreate?: PacoteAnexoCreateOrConnectWithoutPacoteInput | PacoteAnexoCreateOrConnectWithoutPacoteInput[]
    createMany?: PacoteAnexoCreateManyPacoteInputEnvelope
    connect?: PacoteAnexoWhereUniqueInput | PacoteAnexoWhereUniqueInput[]
  }

  export type PacoteCnpjUncheckedCreateNestedManyWithoutPacoteInput = {
    create?: XOR<PacoteCnpjCreateWithoutPacoteInput, PacoteCnpjUncheckedCreateWithoutPacoteInput> | PacoteCnpjCreateWithoutPacoteInput[] | PacoteCnpjUncheckedCreateWithoutPacoteInput[]
    connectOrCreate?: PacoteCnpjCreateOrConnectWithoutPacoteInput | PacoteCnpjCreateOrConnectWithoutPacoteInput[]
    createMany?: PacoteCnpjCreateManyPacoteInputEnvelope
    connect?: PacoteCnpjWhereUniqueInput | PacoteCnpjWhereUniqueInput[]
  }

  export type PacoteHospitalUncheckedCreateNestedManyWithoutPacoteInput = {
    create?: XOR<PacoteHospitalCreateWithoutPacoteInput, PacoteHospitalUncheckedCreateWithoutPacoteInput> | PacoteHospitalCreateWithoutPacoteInput[] | PacoteHospitalUncheckedCreateWithoutPacoteInput[]
    connectOrCreate?: PacoteHospitalCreateOrConnectWithoutPacoteInput | PacoteHospitalCreateOrConnectWithoutPacoteInput[]
    createMany?: PacoteHospitalCreateManyPacoteInputEnvelope
    connect?: PacoteHospitalWhereUniqueInput | PacoteHospitalWhereUniqueInput[]
  }

  export type PacoteContemplacaoUncheckedCreateNestedManyWithoutPacoteInput = {
    create?: XOR<PacoteContemplacaoCreateWithoutPacoteInput, PacoteContemplacaoUncheckedCreateWithoutPacoteInput> | PacoteContemplacaoCreateWithoutPacoteInput[] | PacoteContemplacaoUncheckedCreateWithoutPacoteInput[]
    connectOrCreate?: PacoteContemplacaoCreateOrConnectWithoutPacoteInput | PacoteContemplacaoCreateOrConnectWithoutPacoteInput[]
    createMany?: PacoteContemplacaoCreateManyPacoteInputEnvelope
    connect?: PacoteContemplacaoWhereUniqueInput | PacoteContemplacaoWhereUniqueInput[]
  }

  export type PacoteAnexoUncheckedCreateNestedManyWithoutPacoteInput = {
    create?: XOR<PacoteAnexoCreateWithoutPacoteInput, PacoteAnexoUncheckedCreateWithoutPacoteInput> | PacoteAnexoCreateWithoutPacoteInput[] | PacoteAnexoUncheckedCreateWithoutPacoteInput[]
    connectOrCreate?: PacoteAnexoCreateOrConnectWithoutPacoteInput | PacoteAnexoCreateOrConnectWithoutPacoteInput[]
    createMany?: PacoteAnexoCreateManyPacoteInputEnvelope
    connect?: PacoteAnexoWhereUniqueInput | PacoteAnexoWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutPacotesCriadosNestedInput = {
    create?: XOR<UserCreateWithoutPacotesCriadosInput, UserUncheckedCreateWithoutPacotesCriadosInput>
    connectOrCreate?: UserCreateOrConnectWithoutPacotesCriadosInput
    upsert?: UserUpsertWithoutPacotesCriadosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPacotesCriadosInput, UserUpdateWithoutPacotesCriadosInput>, UserUncheckedUpdateWithoutPacotesCriadosInput>
  }

  export type PacoteCnpjUpdateManyWithoutPacoteNestedInput = {
    create?: XOR<PacoteCnpjCreateWithoutPacoteInput, PacoteCnpjUncheckedCreateWithoutPacoteInput> | PacoteCnpjCreateWithoutPacoteInput[] | PacoteCnpjUncheckedCreateWithoutPacoteInput[]
    connectOrCreate?: PacoteCnpjCreateOrConnectWithoutPacoteInput | PacoteCnpjCreateOrConnectWithoutPacoteInput[]
    upsert?: PacoteCnpjUpsertWithWhereUniqueWithoutPacoteInput | PacoteCnpjUpsertWithWhereUniqueWithoutPacoteInput[]
    createMany?: PacoteCnpjCreateManyPacoteInputEnvelope
    set?: PacoteCnpjWhereUniqueInput | PacoteCnpjWhereUniqueInput[]
    disconnect?: PacoteCnpjWhereUniqueInput | PacoteCnpjWhereUniqueInput[]
    delete?: PacoteCnpjWhereUniqueInput | PacoteCnpjWhereUniqueInput[]
    connect?: PacoteCnpjWhereUniqueInput | PacoteCnpjWhereUniqueInput[]
    update?: PacoteCnpjUpdateWithWhereUniqueWithoutPacoteInput | PacoteCnpjUpdateWithWhereUniqueWithoutPacoteInput[]
    updateMany?: PacoteCnpjUpdateManyWithWhereWithoutPacoteInput | PacoteCnpjUpdateManyWithWhereWithoutPacoteInput[]
    deleteMany?: PacoteCnpjScalarWhereInput | PacoteCnpjScalarWhereInput[]
  }

  export type PacoteHospitalUpdateManyWithoutPacoteNestedInput = {
    create?: XOR<PacoteHospitalCreateWithoutPacoteInput, PacoteHospitalUncheckedCreateWithoutPacoteInput> | PacoteHospitalCreateWithoutPacoteInput[] | PacoteHospitalUncheckedCreateWithoutPacoteInput[]
    connectOrCreate?: PacoteHospitalCreateOrConnectWithoutPacoteInput | PacoteHospitalCreateOrConnectWithoutPacoteInput[]
    upsert?: PacoteHospitalUpsertWithWhereUniqueWithoutPacoteInput | PacoteHospitalUpsertWithWhereUniqueWithoutPacoteInput[]
    createMany?: PacoteHospitalCreateManyPacoteInputEnvelope
    set?: PacoteHospitalWhereUniqueInput | PacoteHospitalWhereUniqueInput[]
    disconnect?: PacoteHospitalWhereUniqueInput | PacoteHospitalWhereUniqueInput[]
    delete?: PacoteHospitalWhereUniqueInput | PacoteHospitalWhereUniqueInput[]
    connect?: PacoteHospitalWhereUniqueInput | PacoteHospitalWhereUniqueInput[]
    update?: PacoteHospitalUpdateWithWhereUniqueWithoutPacoteInput | PacoteHospitalUpdateWithWhereUniqueWithoutPacoteInput[]
    updateMany?: PacoteHospitalUpdateManyWithWhereWithoutPacoteInput | PacoteHospitalUpdateManyWithWhereWithoutPacoteInput[]
    deleteMany?: PacoteHospitalScalarWhereInput | PacoteHospitalScalarWhereInput[]
  }

  export type PacoteContemplacaoUpdateManyWithoutPacoteNestedInput = {
    create?: XOR<PacoteContemplacaoCreateWithoutPacoteInput, PacoteContemplacaoUncheckedCreateWithoutPacoteInput> | PacoteContemplacaoCreateWithoutPacoteInput[] | PacoteContemplacaoUncheckedCreateWithoutPacoteInput[]
    connectOrCreate?: PacoteContemplacaoCreateOrConnectWithoutPacoteInput | PacoteContemplacaoCreateOrConnectWithoutPacoteInput[]
    upsert?: PacoteContemplacaoUpsertWithWhereUniqueWithoutPacoteInput | PacoteContemplacaoUpsertWithWhereUniqueWithoutPacoteInput[]
    createMany?: PacoteContemplacaoCreateManyPacoteInputEnvelope
    set?: PacoteContemplacaoWhereUniqueInput | PacoteContemplacaoWhereUniqueInput[]
    disconnect?: PacoteContemplacaoWhereUniqueInput | PacoteContemplacaoWhereUniqueInput[]
    delete?: PacoteContemplacaoWhereUniqueInput | PacoteContemplacaoWhereUniqueInput[]
    connect?: PacoteContemplacaoWhereUniqueInput | PacoteContemplacaoWhereUniqueInput[]
    update?: PacoteContemplacaoUpdateWithWhereUniqueWithoutPacoteInput | PacoteContemplacaoUpdateWithWhereUniqueWithoutPacoteInput[]
    updateMany?: PacoteContemplacaoUpdateManyWithWhereWithoutPacoteInput | PacoteContemplacaoUpdateManyWithWhereWithoutPacoteInput[]
    deleteMany?: PacoteContemplacaoScalarWhereInput | PacoteContemplacaoScalarWhereInput[]
  }

  export type PacoteAnexoUpdateManyWithoutPacoteNestedInput = {
    create?: XOR<PacoteAnexoCreateWithoutPacoteInput, PacoteAnexoUncheckedCreateWithoutPacoteInput> | PacoteAnexoCreateWithoutPacoteInput[] | PacoteAnexoUncheckedCreateWithoutPacoteInput[]
    connectOrCreate?: PacoteAnexoCreateOrConnectWithoutPacoteInput | PacoteAnexoCreateOrConnectWithoutPacoteInput[]
    upsert?: PacoteAnexoUpsertWithWhereUniqueWithoutPacoteInput | PacoteAnexoUpsertWithWhereUniqueWithoutPacoteInput[]
    createMany?: PacoteAnexoCreateManyPacoteInputEnvelope
    set?: PacoteAnexoWhereUniqueInput | PacoteAnexoWhereUniqueInput[]
    disconnect?: PacoteAnexoWhereUniqueInput | PacoteAnexoWhereUniqueInput[]
    delete?: PacoteAnexoWhereUniqueInput | PacoteAnexoWhereUniqueInput[]
    connect?: PacoteAnexoWhereUniqueInput | PacoteAnexoWhereUniqueInput[]
    update?: PacoteAnexoUpdateWithWhereUniqueWithoutPacoteInput | PacoteAnexoUpdateWithWhereUniqueWithoutPacoteInput[]
    updateMany?: PacoteAnexoUpdateManyWithWhereWithoutPacoteInput | PacoteAnexoUpdateManyWithWhereWithoutPacoteInput[]
    deleteMany?: PacoteAnexoScalarWhereInput | PacoteAnexoScalarWhereInput[]
  }

  export type PacoteCnpjUncheckedUpdateManyWithoutPacoteNestedInput = {
    create?: XOR<PacoteCnpjCreateWithoutPacoteInput, PacoteCnpjUncheckedCreateWithoutPacoteInput> | PacoteCnpjCreateWithoutPacoteInput[] | PacoteCnpjUncheckedCreateWithoutPacoteInput[]
    connectOrCreate?: PacoteCnpjCreateOrConnectWithoutPacoteInput | PacoteCnpjCreateOrConnectWithoutPacoteInput[]
    upsert?: PacoteCnpjUpsertWithWhereUniqueWithoutPacoteInput | PacoteCnpjUpsertWithWhereUniqueWithoutPacoteInput[]
    createMany?: PacoteCnpjCreateManyPacoteInputEnvelope
    set?: PacoteCnpjWhereUniqueInput | PacoteCnpjWhereUniqueInput[]
    disconnect?: PacoteCnpjWhereUniqueInput | PacoteCnpjWhereUniqueInput[]
    delete?: PacoteCnpjWhereUniqueInput | PacoteCnpjWhereUniqueInput[]
    connect?: PacoteCnpjWhereUniqueInput | PacoteCnpjWhereUniqueInput[]
    update?: PacoteCnpjUpdateWithWhereUniqueWithoutPacoteInput | PacoteCnpjUpdateWithWhereUniqueWithoutPacoteInput[]
    updateMany?: PacoteCnpjUpdateManyWithWhereWithoutPacoteInput | PacoteCnpjUpdateManyWithWhereWithoutPacoteInput[]
    deleteMany?: PacoteCnpjScalarWhereInput | PacoteCnpjScalarWhereInput[]
  }

  export type PacoteHospitalUncheckedUpdateManyWithoutPacoteNestedInput = {
    create?: XOR<PacoteHospitalCreateWithoutPacoteInput, PacoteHospitalUncheckedCreateWithoutPacoteInput> | PacoteHospitalCreateWithoutPacoteInput[] | PacoteHospitalUncheckedCreateWithoutPacoteInput[]
    connectOrCreate?: PacoteHospitalCreateOrConnectWithoutPacoteInput | PacoteHospitalCreateOrConnectWithoutPacoteInput[]
    upsert?: PacoteHospitalUpsertWithWhereUniqueWithoutPacoteInput | PacoteHospitalUpsertWithWhereUniqueWithoutPacoteInput[]
    createMany?: PacoteHospitalCreateManyPacoteInputEnvelope
    set?: PacoteHospitalWhereUniqueInput | PacoteHospitalWhereUniqueInput[]
    disconnect?: PacoteHospitalWhereUniqueInput | PacoteHospitalWhereUniqueInput[]
    delete?: PacoteHospitalWhereUniqueInput | PacoteHospitalWhereUniqueInput[]
    connect?: PacoteHospitalWhereUniqueInput | PacoteHospitalWhereUniqueInput[]
    update?: PacoteHospitalUpdateWithWhereUniqueWithoutPacoteInput | PacoteHospitalUpdateWithWhereUniqueWithoutPacoteInput[]
    updateMany?: PacoteHospitalUpdateManyWithWhereWithoutPacoteInput | PacoteHospitalUpdateManyWithWhereWithoutPacoteInput[]
    deleteMany?: PacoteHospitalScalarWhereInput | PacoteHospitalScalarWhereInput[]
  }

  export type PacoteContemplacaoUncheckedUpdateManyWithoutPacoteNestedInput = {
    create?: XOR<PacoteContemplacaoCreateWithoutPacoteInput, PacoteContemplacaoUncheckedCreateWithoutPacoteInput> | PacoteContemplacaoCreateWithoutPacoteInput[] | PacoteContemplacaoUncheckedCreateWithoutPacoteInput[]
    connectOrCreate?: PacoteContemplacaoCreateOrConnectWithoutPacoteInput | PacoteContemplacaoCreateOrConnectWithoutPacoteInput[]
    upsert?: PacoteContemplacaoUpsertWithWhereUniqueWithoutPacoteInput | PacoteContemplacaoUpsertWithWhereUniqueWithoutPacoteInput[]
    createMany?: PacoteContemplacaoCreateManyPacoteInputEnvelope
    set?: PacoteContemplacaoWhereUniqueInput | PacoteContemplacaoWhereUniqueInput[]
    disconnect?: PacoteContemplacaoWhereUniqueInput | PacoteContemplacaoWhereUniqueInput[]
    delete?: PacoteContemplacaoWhereUniqueInput | PacoteContemplacaoWhereUniqueInput[]
    connect?: PacoteContemplacaoWhereUniqueInput | PacoteContemplacaoWhereUniqueInput[]
    update?: PacoteContemplacaoUpdateWithWhereUniqueWithoutPacoteInput | PacoteContemplacaoUpdateWithWhereUniqueWithoutPacoteInput[]
    updateMany?: PacoteContemplacaoUpdateManyWithWhereWithoutPacoteInput | PacoteContemplacaoUpdateManyWithWhereWithoutPacoteInput[]
    deleteMany?: PacoteContemplacaoScalarWhereInput | PacoteContemplacaoScalarWhereInput[]
  }

  export type PacoteAnexoUncheckedUpdateManyWithoutPacoteNestedInput = {
    create?: XOR<PacoteAnexoCreateWithoutPacoteInput, PacoteAnexoUncheckedCreateWithoutPacoteInput> | PacoteAnexoCreateWithoutPacoteInput[] | PacoteAnexoUncheckedCreateWithoutPacoteInput[]
    connectOrCreate?: PacoteAnexoCreateOrConnectWithoutPacoteInput | PacoteAnexoCreateOrConnectWithoutPacoteInput[]
    upsert?: PacoteAnexoUpsertWithWhereUniqueWithoutPacoteInput | PacoteAnexoUpsertWithWhereUniqueWithoutPacoteInput[]
    createMany?: PacoteAnexoCreateManyPacoteInputEnvelope
    set?: PacoteAnexoWhereUniqueInput | PacoteAnexoWhereUniqueInput[]
    disconnect?: PacoteAnexoWhereUniqueInput | PacoteAnexoWhereUniqueInput[]
    delete?: PacoteAnexoWhereUniqueInput | PacoteAnexoWhereUniqueInput[]
    connect?: PacoteAnexoWhereUniqueInput | PacoteAnexoWhereUniqueInput[]
    update?: PacoteAnexoUpdateWithWhereUniqueWithoutPacoteInput | PacoteAnexoUpdateWithWhereUniqueWithoutPacoteInput[]
    updateMany?: PacoteAnexoUpdateManyWithWhereWithoutPacoteInput | PacoteAnexoUpdateManyWithWhereWithoutPacoteInput[]
    deleteMany?: PacoteAnexoScalarWhereInput | PacoteAnexoScalarWhereInput[]
  }

  export type PacoteCreateNestedOneWithoutCnpjsInput = {
    create?: XOR<PacoteCreateWithoutCnpjsInput, PacoteUncheckedCreateWithoutCnpjsInput>
    connectOrCreate?: PacoteCreateOrConnectWithoutCnpjsInput
    connect?: PacoteWhereUniqueInput
  }

  export type PacoteUpdateOneRequiredWithoutCnpjsNestedInput = {
    create?: XOR<PacoteCreateWithoutCnpjsInput, PacoteUncheckedCreateWithoutCnpjsInput>
    connectOrCreate?: PacoteCreateOrConnectWithoutCnpjsInput
    upsert?: PacoteUpsertWithoutCnpjsInput
    connect?: PacoteWhereUniqueInput
    update?: XOR<XOR<PacoteUpdateToOneWithWhereWithoutCnpjsInput, PacoteUpdateWithoutCnpjsInput>, PacoteUncheckedUpdateWithoutCnpjsInput>
  }

  export type PacoteCreateNestedOneWithoutHospitaisInput = {
    create?: XOR<PacoteCreateWithoutHospitaisInput, PacoteUncheckedCreateWithoutHospitaisInput>
    connectOrCreate?: PacoteCreateOrConnectWithoutHospitaisInput
    connect?: PacoteWhereUniqueInput
  }

  export type PacoteUpdateOneRequiredWithoutHospitaisNestedInput = {
    create?: XOR<PacoteCreateWithoutHospitaisInput, PacoteUncheckedCreateWithoutHospitaisInput>
    connectOrCreate?: PacoteCreateOrConnectWithoutHospitaisInput
    upsert?: PacoteUpsertWithoutHospitaisInput
    connect?: PacoteWhereUniqueInput
    update?: XOR<XOR<PacoteUpdateToOneWithWhereWithoutHospitaisInput, PacoteUpdateWithoutHospitaisInput>, PacoteUncheckedUpdateWithoutHospitaisInput>
  }

  export type PacoteCreateNestedOneWithoutContemplacoesInput = {
    create?: XOR<PacoteCreateWithoutContemplacoesInput, PacoteUncheckedCreateWithoutContemplacoesInput>
    connectOrCreate?: PacoteCreateOrConnectWithoutContemplacoesInput
    connect?: PacoteWhereUniqueInput
  }

  export type PacoteUpdateOneRequiredWithoutContemplacoesNestedInput = {
    create?: XOR<PacoteCreateWithoutContemplacoesInput, PacoteUncheckedCreateWithoutContemplacoesInput>
    connectOrCreate?: PacoteCreateOrConnectWithoutContemplacoesInput
    upsert?: PacoteUpsertWithoutContemplacoesInput
    connect?: PacoteWhereUniqueInput
    update?: XOR<XOR<PacoteUpdateToOneWithWhereWithoutContemplacoesInput, PacoteUpdateWithoutContemplacoesInput>, PacoteUncheckedUpdateWithoutContemplacoesInput>
  }

  export type PacoteCreateNestedOneWithoutAnexosInput = {
    create?: XOR<PacoteCreateWithoutAnexosInput, PacoteUncheckedCreateWithoutAnexosInput>
    connectOrCreate?: PacoteCreateOrConnectWithoutAnexosInput
    connect?: PacoteWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PacoteUpdateOneRequiredWithoutAnexosNestedInput = {
    create?: XOR<PacoteCreateWithoutAnexosInput, PacoteUncheckedCreateWithoutAnexosInput>
    connectOrCreate?: PacoteCreateOrConnectWithoutAnexosInput
    upsert?: PacoteUpsertWithoutAnexosInput
    connect?: PacoteWhereUniqueInput
    update?: XOR<XOR<PacoteUpdateToOneWithWhereWithoutAnexosInput, PacoteUpdateWithoutAnexosInput>, PacoteUncheckedUpdateWithoutAnexosInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type PacoteCreateWithoutCreatedByInput = {
    id?: string
    nomePacote: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cnpjs?: PacoteCnpjCreateNestedManyWithoutPacoteInput
    hospitais?: PacoteHospitalCreateNestedManyWithoutPacoteInput
    contemplacoes?: PacoteContemplacaoCreateNestedManyWithoutPacoteInput
    anexos?: PacoteAnexoCreateNestedManyWithoutPacoteInput
  }

  export type PacoteUncheckedCreateWithoutCreatedByInput = {
    id?: string
    nomePacote: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cnpjs?: PacoteCnpjUncheckedCreateNestedManyWithoutPacoteInput
    hospitais?: PacoteHospitalUncheckedCreateNestedManyWithoutPacoteInput
    contemplacoes?: PacoteContemplacaoUncheckedCreateNestedManyWithoutPacoteInput
    anexos?: PacoteAnexoUncheckedCreateNestedManyWithoutPacoteInput
  }

  export type PacoteCreateOrConnectWithoutCreatedByInput = {
    where: PacoteWhereUniqueInput
    create: XOR<PacoteCreateWithoutCreatedByInput, PacoteUncheckedCreateWithoutCreatedByInput>
  }

  export type PacoteCreateManyCreatedByInputEnvelope = {
    data: PacoteCreateManyCreatedByInput | PacoteCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type PacoteUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: PacoteWhereUniqueInput
    update: XOR<PacoteUpdateWithoutCreatedByInput, PacoteUncheckedUpdateWithoutCreatedByInput>
    create: XOR<PacoteCreateWithoutCreatedByInput, PacoteUncheckedCreateWithoutCreatedByInput>
  }

  export type PacoteUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: PacoteWhereUniqueInput
    data: XOR<PacoteUpdateWithoutCreatedByInput, PacoteUncheckedUpdateWithoutCreatedByInput>
  }

  export type PacoteUpdateManyWithWhereWithoutCreatedByInput = {
    where: PacoteScalarWhereInput
    data: XOR<PacoteUpdateManyMutationInput, PacoteUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type PacoteScalarWhereInput = {
    AND?: PacoteScalarWhereInput | PacoteScalarWhereInput[]
    OR?: PacoteScalarWhereInput[]
    NOT?: PacoteScalarWhereInput | PacoteScalarWhereInput[]
    id?: StringFilter<"Pacote"> | string
    nomePacote?: StringFilter<"Pacote"> | string
    createdAt?: DateTimeFilter<"Pacote"> | Date | string
    updatedAt?: DateTimeFilter<"Pacote"> | Date | string
    createdById?: StringFilter<"Pacote"> | string
  }

  export type UserCreateWithoutPacotesCriadosInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutPacotesCriadosInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutPacotesCriadosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPacotesCriadosInput, UserUncheckedCreateWithoutPacotesCriadosInput>
  }

  export type PacoteCnpjCreateWithoutPacoteInput = {
    id?: string
    cnpj: string
  }

  export type PacoteCnpjUncheckedCreateWithoutPacoteInput = {
    id?: string
    cnpj: string
  }

  export type PacoteCnpjCreateOrConnectWithoutPacoteInput = {
    where: PacoteCnpjWhereUniqueInput
    create: XOR<PacoteCnpjCreateWithoutPacoteInput, PacoteCnpjUncheckedCreateWithoutPacoteInput>
  }

  export type PacoteCnpjCreateManyPacoteInputEnvelope = {
    data: PacoteCnpjCreateManyPacoteInput | PacoteCnpjCreateManyPacoteInput[]
    skipDuplicates?: boolean
  }

  export type PacoteHospitalCreateWithoutPacoteInput = {
    id?: string
    nome: string
  }

  export type PacoteHospitalUncheckedCreateWithoutPacoteInput = {
    id?: string
    nome: string
  }

  export type PacoteHospitalCreateOrConnectWithoutPacoteInput = {
    where: PacoteHospitalWhereUniqueInput
    create: XOR<PacoteHospitalCreateWithoutPacoteInput, PacoteHospitalUncheckedCreateWithoutPacoteInput>
  }

  export type PacoteHospitalCreateManyPacoteInputEnvelope = {
    data: PacoteHospitalCreateManyPacoteInput | PacoteHospitalCreateManyPacoteInput[]
    skipDuplicates?: boolean
  }

  export type PacoteContemplacaoCreateWithoutPacoteInput = {
    id?: string
    codigo: string
    descricao: string
    valor: string
  }

  export type PacoteContemplacaoUncheckedCreateWithoutPacoteInput = {
    id?: string
    codigo: string
    descricao: string
    valor: string
  }

  export type PacoteContemplacaoCreateOrConnectWithoutPacoteInput = {
    where: PacoteContemplacaoWhereUniqueInput
    create: XOR<PacoteContemplacaoCreateWithoutPacoteInput, PacoteContemplacaoUncheckedCreateWithoutPacoteInput>
  }

  export type PacoteContemplacaoCreateManyPacoteInputEnvelope = {
    data: PacoteContemplacaoCreateManyPacoteInput | PacoteContemplacaoCreateManyPacoteInput[]
    skipDuplicates?: boolean
  }

  export type PacoteAnexoCreateWithoutPacoteInput = {
    id?: string
    nomeOriginal: string
    caminho: string
    mimeType: string
    tamanhoBytes: number
    createdAt?: Date | string
  }

  export type PacoteAnexoUncheckedCreateWithoutPacoteInput = {
    id?: string
    nomeOriginal: string
    caminho: string
    mimeType: string
    tamanhoBytes: number
    createdAt?: Date | string
  }

  export type PacoteAnexoCreateOrConnectWithoutPacoteInput = {
    where: PacoteAnexoWhereUniqueInput
    create: XOR<PacoteAnexoCreateWithoutPacoteInput, PacoteAnexoUncheckedCreateWithoutPacoteInput>
  }

  export type PacoteAnexoCreateManyPacoteInputEnvelope = {
    data: PacoteAnexoCreateManyPacoteInput | PacoteAnexoCreateManyPacoteInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPacotesCriadosInput = {
    update: XOR<UserUpdateWithoutPacotesCriadosInput, UserUncheckedUpdateWithoutPacotesCriadosInput>
    create: XOR<UserCreateWithoutPacotesCriadosInput, UserUncheckedCreateWithoutPacotesCriadosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPacotesCriadosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPacotesCriadosInput, UserUncheckedUpdateWithoutPacotesCriadosInput>
  }

  export type UserUpdateWithoutPacotesCriadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutPacotesCriadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PacoteCnpjUpsertWithWhereUniqueWithoutPacoteInput = {
    where: PacoteCnpjWhereUniqueInput
    update: XOR<PacoteCnpjUpdateWithoutPacoteInput, PacoteCnpjUncheckedUpdateWithoutPacoteInput>
    create: XOR<PacoteCnpjCreateWithoutPacoteInput, PacoteCnpjUncheckedCreateWithoutPacoteInput>
  }

  export type PacoteCnpjUpdateWithWhereUniqueWithoutPacoteInput = {
    where: PacoteCnpjWhereUniqueInput
    data: XOR<PacoteCnpjUpdateWithoutPacoteInput, PacoteCnpjUncheckedUpdateWithoutPacoteInput>
  }

  export type PacoteCnpjUpdateManyWithWhereWithoutPacoteInput = {
    where: PacoteCnpjScalarWhereInput
    data: XOR<PacoteCnpjUpdateManyMutationInput, PacoteCnpjUncheckedUpdateManyWithoutPacoteInput>
  }

  export type PacoteCnpjScalarWhereInput = {
    AND?: PacoteCnpjScalarWhereInput | PacoteCnpjScalarWhereInput[]
    OR?: PacoteCnpjScalarWhereInput[]
    NOT?: PacoteCnpjScalarWhereInput | PacoteCnpjScalarWhereInput[]
    id?: StringFilter<"PacoteCnpj"> | string
    cnpj?: StringFilter<"PacoteCnpj"> | string
    pacoteId?: StringFilter<"PacoteCnpj"> | string
  }

  export type PacoteHospitalUpsertWithWhereUniqueWithoutPacoteInput = {
    where: PacoteHospitalWhereUniqueInput
    update: XOR<PacoteHospitalUpdateWithoutPacoteInput, PacoteHospitalUncheckedUpdateWithoutPacoteInput>
    create: XOR<PacoteHospitalCreateWithoutPacoteInput, PacoteHospitalUncheckedCreateWithoutPacoteInput>
  }

  export type PacoteHospitalUpdateWithWhereUniqueWithoutPacoteInput = {
    where: PacoteHospitalWhereUniqueInput
    data: XOR<PacoteHospitalUpdateWithoutPacoteInput, PacoteHospitalUncheckedUpdateWithoutPacoteInput>
  }

  export type PacoteHospitalUpdateManyWithWhereWithoutPacoteInput = {
    where: PacoteHospitalScalarWhereInput
    data: XOR<PacoteHospitalUpdateManyMutationInput, PacoteHospitalUncheckedUpdateManyWithoutPacoteInput>
  }

  export type PacoteHospitalScalarWhereInput = {
    AND?: PacoteHospitalScalarWhereInput | PacoteHospitalScalarWhereInput[]
    OR?: PacoteHospitalScalarWhereInput[]
    NOT?: PacoteHospitalScalarWhereInput | PacoteHospitalScalarWhereInput[]
    id?: StringFilter<"PacoteHospital"> | string
    nome?: StringFilter<"PacoteHospital"> | string
    pacoteId?: StringFilter<"PacoteHospital"> | string
  }

  export type PacoteContemplacaoUpsertWithWhereUniqueWithoutPacoteInput = {
    where: PacoteContemplacaoWhereUniqueInput
    update: XOR<PacoteContemplacaoUpdateWithoutPacoteInput, PacoteContemplacaoUncheckedUpdateWithoutPacoteInput>
    create: XOR<PacoteContemplacaoCreateWithoutPacoteInput, PacoteContemplacaoUncheckedCreateWithoutPacoteInput>
  }

  export type PacoteContemplacaoUpdateWithWhereUniqueWithoutPacoteInput = {
    where: PacoteContemplacaoWhereUniqueInput
    data: XOR<PacoteContemplacaoUpdateWithoutPacoteInput, PacoteContemplacaoUncheckedUpdateWithoutPacoteInput>
  }

  export type PacoteContemplacaoUpdateManyWithWhereWithoutPacoteInput = {
    where: PacoteContemplacaoScalarWhereInput
    data: XOR<PacoteContemplacaoUpdateManyMutationInput, PacoteContemplacaoUncheckedUpdateManyWithoutPacoteInput>
  }

  export type PacoteContemplacaoScalarWhereInput = {
    AND?: PacoteContemplacaoScalarWhereInput | PacoteContemplacaoScalarWhereInput[]
    OR?: PacoteContemplacaoScalarWhereInput[]
    NOT?: PacoteContemplacaoScalarWhereInput | PacoteContemplacaoScalarWhereInput[]
    id?: StringFilter<"PacoteContemplacao"> | string
    codigo?: StringFilter<"PacoteContemplacao"> | string
    descricao?: StringFilter<"PacoteContemplacao"> | string
    valor?: StringFilter<"PacoteContemplacao"> | string
    pacoteId?: StringFilter<"PacoteContemplacao"> | string
  }

  export type PacoteAnexoUpsertWithWhereUniqueWithoutPacoteInput = {
    where: PacoteAnexoWhereUniqueInput
    update: XOR<PacoteAnexoUpdateWithoutPacoteInput, PacoteAnexoUncheckedUpdateWithoutPacoteInput>
    create: XOR<PacoteAnexoCreateWithoutPacoteInput, PacoteAnexoUncheckedCreateWithoutPacoteInput>
  }

  export type PacoteAnexoUpdateWithWhereUniqueWithoutPacoteInput = {
    where: PacoteAnexoWhereUniqueInput
    data: XOR<PacoteAnexoUpdateWithoutPacoteInput, PacoteAnexoUncheckedUpdateWithoutPacoteInput>
  }

  export type PacoteAnexoUpdateManyWithWhereWithoutPacoteInput = {
    where: PacoteAnexoScalarWhereInput
    data: XOR<PacoteAnexoUpdateManyMutationInput, PacoteAnexoUncheckedUpdateManyWithoutPacoteInput>
  }

  export type PacoteAnexoScalarWhereInput = {
    AND?: PacoteAnexoScalarWhereInput | PacoteAnexoScalarWhereInput[]
    OR?: PacoteAnexoScalarWhereInput[]
    NOT?: PacoteAnexoScalarWhereInput | PacoteAnexoScalarWhereInput[]
    id?: StringFilter<"PacoteAnexo"> | string
    nomeOriginal?: StringFilter<"PacoteAnexo"> | string
    caminho?: StringFilter<"PacoteAnexo"> | string
    mimeType?: StringFilter<"PacoteAnexo"> | string
    tamanhoBytes?: IntFilter<"PacoteAnexo"> | number
    createdAt?: DateTimeFilter<"PacoteAnexo"> | Date | string
    pacoteId?: StringFilter<"PacoteAnexo"> | string
  }

  export type PacoteCreateWithoutCnpjsInput = {
    id?: string
    nomePacote: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutPacotesCriadosInput
    hospitais?: PacoteHospitalCreateNestedManyWithoutPacoteInput
    contemplacoes?: PacoteContemplacaoCreateNestedManyWithoutPacoteInput
    anexos?: PacoteAnexoCreateNestedManyWithoutPacoteInput
  }

  export type PacoteUncheckedCreateWithoutCnpjsInput = {
    id?: string
    nomePacote: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
    hospitais?: PacoteHospitalUncheckedCreateNestedManyWithoutPacoteInput
    contemplacoes?: PacoteContemplacaoUncheckedCreateNestedManyWithoutPacoteInput
    anexos?: PacoteAnexoUncheckedCreateNestedManyWithoutPacoteInput
  }

  export type PacoteCreateOrConnectWithoutCnpjsInput = {
    where: PacoteWhereUniqueInput
    create: XOR<PacoteCreateWithoutCnpjsInput, PacoteUncheckedCreateWithoutCnpjsInput>
  }

  export type PacoteUpsertWithoutCnpjsInput = {
    update: XOR<PacoteUpdateWithoutCnpjsInput, PacoteUncheckedUpdateWithoutCnpjsInput>
    create: XOR<PacoteCreateWithoutCnpjsInput, PacoteUncheckedCreateWithoutCnpjsInput>
    where?: PacoteWhereInput
  }

  export type PacoteUpdateToOneWithWhereWithoutCnpjsInput = {
    where?: PacoteWhereInput
    data: XOR<PacoteUpdateWithoutCnpjsInput, PacoteUncheckedUpdateWithoutCnpjsInput>
  }

  export type PacoteUpdateWithoutCnpjsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomePacote?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutPacotesCriadosNestedInput
    hospitais?: PacoteHospitalUpdateManyWithoutPacoteNestedInput
    contemplacoes?: PacoteContemplacaoUpdateManyWithoutPacoteNestedInput
    anexos?: PacoteAnexoUpdateManyWithoutPacoteNestedInput
  }

  export type PacoteUncheckedUpdateWithoutCnpjsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomePacote?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    hospitais?: PacoteHospitalUncheckedUpdateManyWithoutPacoteNestedInput
    contemplacoes?: PacoteContemplacaoUncheckedUpdateManyWithoutPacoteNestedInput
    anexos?: PacoteAnexoUncheckedUpdateManyWithoutPacoteNestedInput
  }

  export type PacoteCreateWithoutHospitaisInput = {
    id?: string
    nomePacote: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutPacotesCriadosInput
    cnpjs?: PacoteCnpjCreateNestedManyWithoutPacoteInput
    contemplacoes?: PacoteContemplacaoCreateNestedManyWithoutPacoteInput
    anexos?: PacoteAnexoCreateNestedManyWithoutPacoteInput
  }

  export type PacoteUncheckedCreateWithoutHospitaisInput = {
    id?: string
    nomePacote: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
    cnpjs?: PacoteCnpjUncheckedCreateNestedManyWithoutPacoteInput
    contemplacoes?: PacoteContemplacaoUncheckedCreateNestedManyWithoutPacoteInput
    anexos?: PacoteAnexoUncheckedCreateNestedManyWithoutPacoteInput
  }

  export type PacoteCreateOrConnectWithoutHospitaisInput = {
    where: PacoteWhereUniqueInput
    create: XOR<PacoteCreateWithoutHospitaisInput, PacoteUncheckedCreateWithoutHospitaisInput>
  }

  export type PacoteUpsertWithoutHospitaisInput = {
    update: XOR<PacoteUpdateWithoutHospitaisInput, PacoteUncheckedUpdateWithoutHospitaisInput>
    create: XOR<PacoteCreateWithoutHospitaisInput, PacoteUncheckedCreateWithoutHospitaisInput>
    where?: PacoteWhereInput
  }

  export type PacoteUpdateToOneWithWhereWithoutHospitaisInput = {
    where?: PacoteWhereInput
    data: XOR<PacoteUpdateWithoutHospitaisInput, PacoteUncheckedUpdateWithoutHospitaisInput>
  }

  export type PacoteUpdateWithoutHospitaisInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomePacote?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutPacotesCriadosNestedInput
    cnpjs?: PacoteCnpjUpdateManyWithoutPacoteNestedInput
    contemplacoes?: PacoteContemplacaoUpdateManyWithoutPacoteNestedInput
    anexos?: PacoteAnexoUpdateManyWithoutPacoteNestedInput
  }

  export type PacoteUncheckedUpdateWithoutHospitaisInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomePacote?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    cnpjs?: PacoteCnpjUncheckedUpdateManyWithoutPacoteNestedInput
    contemplacoes?: PacoteContemplacaoUncheckedUpdateManyWithoutPacoteNestedInput
    anexos?: PacoteAnexoUncheckedUpdateManyWithoutPacoteNestedInput
  }

  export type PacoteCreateWithoutContemplacoesInput = {
    id?: string
    nomePacote: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutPacotesCriadosInput
    cnpjs?: PacoteCnpjCreateNestedManyWithoutPacoteInput
    hospitais?: PacoteHospitalCreateNestedManyWithoutPacoteInput
    anexos?: PacoteAnexoCreateNestedManyWithoutPacoteInput
  }

  export type PacoteUncheckedCreateWithoutContemplacoesInput = {
    id?: string
    nomePacote: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
    cnpjs?: PacoteCnpjUncheckedCreateNestedManyWithoutPacoteInput
    hospitais?: PacoteHospitalUncheckedCreateNestedManyWithoutPacoteInput
    anexos?: PacoteAnexoUncheckedCreateNestedManyWithoutPacoteInput
  }

  export type PacoteCreateOrConnectWithoutContemplacoesInput = {
    where: PacoteWhereUniqueInput
    create: XOR<PacoteCreateWithoutContemplacoesInput, PacoteUncheckedCreateWithoutContemplacoesInput>
  }

  export type PacoteUpsertWithoutContemplacoesInput = {
    update: XOR<PacoteUpdateWithoutContemplacoesInput, PacoteUncheckedUpdateWithoutContemplacoesInput>
    create: XOR<PacoteCreateWithoutContemplacoesInput, PacoteUncheckedCreateWithoutContemplacoesInput>
    where?: PacoteWhereInput
  }

  export type PacoteUpdateToOneWithWhereWithoutContemplacoesInput = {
    where?: PacoteWhereInput
    data: XOR<PacoteUpdateWithoutContemplacoesInput, PacoteUncheckedUpdateWithoutContemplacoesInput>
  }

  export type PacoteUpdateWithoutContemplacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomePacote?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutPacotesCriadosNestedInput
    cnpjs?: PacoteCnpjUpdateManyWithoutPacoteNestedInput
    hospitais?: PacoteHospitalUpdateManyWithoutPacoteNestedInput
    anexos?: PacoteAnexoUpdateManyWithoutPacoteNestedInput
  }

  export type PacoteUncheckedUpdateWithoutContemplacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomePacote?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    cnpjs?: PacoteCnpjUncheckedUpdateManyWithoutPacoteNestedInput
    hospitais?: PacoteHospitalUncheckedUpdateManyWithoutPacoteNestedInput
    anexos?: PacoteAnexoUncheckedUpdateManyWithoutPacoteNestedInput
  }

  export type PacoteCreateWithoutAnexosInput = {
    id?: string
    nomePacote: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutPacotesCriadosInput
    cnpjs?: PacoteCnpjCreateNestedManyWithoutPacoteInput
    hospitais?: PacoteHospitalCreateNestedManyWithoutPacoteInput
    contemplacoes?: PacoteContemplacaoCreateNestedManyWithoutPacoteInput
  }

  export type PacoteUncheckedCreateWithoutAnexosInput = {
    id?: string
    nomePacote: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
    cnpjs?: PacoteCnpjUncheckedCreateNestedManyWithoutPacoteInput
    hospitais?: PacoteHospitalUncheckedCreateNestedManyWithoutPacoteInput
    contemplacoes?: PacoteContemplacaoUncheckedCreateNestedManyWithoutPacoteInput
  }

  export type PacoteCreateOrConnectWithoutAnexosInput = {
    where: PacoteWhereUniqueInput
    create: XOR<PacoteCreateWithoutAnexosInput, PacoteUncheckedCreateWithoutAnexosInput>
  }

  export type PacoteUpsertWithoutAnexosInput = {
    update: XOR<PacoteUpdateWithoutAnexosInput, PacoteUncheckedUpdateWithoutAnexosInput>
    create: XOR<PacoteCreateWithoutAnexosInput, PacoteUncheckedCreateWithoutAnexosInput>
    where?: PacoteWhereInput
  }

  export type PacoteUpdateToOneWithWhereWithoutAnexosInput = {
    where?: PacoteWhereInput
    data: XOR<PacoteUpdateWithoutAnexosInput, PacoteUncheckedUpdateWithoutAnexosInput>
  }

  export type PacoteUpdateWithoutAnexosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomePacote?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutPacotesCriadosNestedInput
    cnpjs?: PacoteCnpjUpdateManyWithoutPacoteNestedInput
    hospitais?: PacoteHospitalUpdateManyWithoutPacoteNestedInput
    contemplacoes?: PacoteContemplacaoUpdateManyWithoutPacoteNestedInput
  }

  export type PacoteUncheckedUpdateWithoutAnexosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomePacote?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    cnpjs?: PacoteCnpjUncheckedUpdateManyWithoutPacoteNestedInput
    hospitais?: PacoteHospitalUncheckedUpdateManyWithoutPacoteNestedInput
    contemplacoes?: PacoteContemplacaoUncheckedUpdateManyWithoutPacoteNestedInput
  }

  export type PacoteCreateManyCreatedByInput = {
    id?: string
    nomePacote: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PacoteUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomePacote?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cnpjs?: PacoteCnpjUpdateManyWithoutPacoteNestedInput
    hospitais?: PacoteHospitalUpdateManyWithoutPacoteNestedInput
    contemplacoes?: PacoteContemplacaoUpdateManyWithoutPacoteNestedInput
    anexos?: PacoteAnexoUpdateManyWithoutPacoteNestedInput
  }

  export type PacoteUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomePacote?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cnpjs?: PacoteCnpjUncheckedUpdateManyWithoutPacoteNestedInput
    hospitais?: PacoteHospitalUncheckedUpdateManyWithoutPacoteNestedInput
    contemplacoes?: PacoteContemplacaoUncheckedUpdateManyWithoutPacoteNestedInput
    anexos?: PacoteAnexoUncheckedUpdateManyWithoutPacoteNestedInput
  }

  export type PacoteUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomePacote?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PacoteCnpjCreateManyPacoteInput = {
    id?: string
    cnpj: string
  }

  export type PacoteHospitalCreateManyPacoteInput = {
    id?: string
    nome: string
  }

  export type PacoteContemplacaoCreateManyPacoteInput = {
    id?: string
    codigo: string
    descricao: string
    valor: string
  }

  export type PacoteAnexoCreateManyPacoteInput = {
    id?: string
    nomeOriginal: string
    caminho: string
    mimeType: string
    tamanhoBytes: number
    createdAt?: Date | string
  }

  export type PacoteCnpjUpdateWithoutPacoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
  }

  export type PacoteCnpjUncheckedUpdateWithoutPacoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
  }

  export type PacoteCnpjUncheckedUpdateManyWithoutPacoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
  }

  export type PacoteHospitalUpdateWithoutPacoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type PacoteHospitalUncheckedUpdateWithoutPacoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type PacoteHospitalUncheckedUpdateManyWithoutPacoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type PacoteContemplacaoUpdateWithoutPacoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
  }

  export type PacoteContemplacaoUncheckedUpdateWithoutPacoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
  }

  export type PacoteContemplacaoUncheckedUpdateManyWithoutPacoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
  }

  export type PacoteAnexoUpdateWithoutPacoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeOriginal?: StringFieldUpdateOperationsInput | string
    caminho?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    tamanhoBytes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PacoteAnexoUncheckedUpdateWithoutPacoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeOriginal?: StringFieldUpdateOperationsInput | string
    caminho?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    tamanhoBytes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PacoteAnexoUncheckedUpdateManyWithoutPacoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeOriginal?: StringFieldUpdateOperationsInput | string
    caminho?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    tamanhoBytes?: IntFieldUpdateOperationsInput | number
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