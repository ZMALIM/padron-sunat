import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { registerAs } from '@nestjs/config';

const entitiesContexts = (require as any).context('../app/', true, /\.model.ts$/);
const migrationsContexts = (require as any).context('../app/', true, /\.migration.ts$/);
const entities = entitiesContexts
    .keys()
    .map(modulePath => entitiesContexts(modulePath))
    .reduce(
        (result, entityModule) =>
            result.concat(Object.keys(entityModule).map(key => entityModule[key])),
        []
    );
const requireAllClasses = (rc) => {
    return rc
        .keys()
        .flatMap(key => Object.values(rc(key)))
        .filter(obj => !!obj.prototype && !!obj.prototype.constructor.name);
}

console.log(requireAllClasses(entitiesContexts));

export default registerAs('db', () => ({

    /**
     * @description
     * Nombre de la conexión. 
     * Lo usará para obtener la conexión que necesita usando o . 
     * Los nombres de conexión para conexiones 
     * diferentes no pueden ser los mismos: todos deben ser únicos. 
     * Si no se da el nombre de la conexión, 
     * entonces se llamará "predeterminado".
     */
    name: process.env.TYPEORM_CONNECTION_NAME,

    /**
     * @description
     * Tipo de base de datos. Debe especificar qué motor de base de datos utiliza.
     * Los valores posibles son:
     * @Ejemplo: [
     * "mysql",
     * "postgres",
     * "cockroachdb",
     * "mariadb",
     * "sqlite",
     * "cordova",
     * "nativescript",
     * "oracle",
     * "mssql",
     * "mongodb",
     * "sqljs",
     * "reaccion- nativo".]
     * Esta opción es obligatoria .
     */
    type: process.env.TYPEORM_CONNECTION,

    /**
     * @description
     * Host del servidor
     * @example {10.0.55.65}
     */
    host: process.env.TYPEORM_HOST,

    /**
     * @description
     * Puerto de host de la base de datos. El puerto mysql predeterminado es 3306.
     */
    port: parseInt(process.env.TYPEORM_PORT, 10) || 3000,

    /**
     * @description
     * Nombre de la base de datos.
     */
    database: process.env.TYPEORM_DATABASE,

    /**
     * @description
     * Nombre de usuario de la base de datos.
     * @example {transportes2019}
     */
    username: process.env.TYPEORM_USERNAME,

    /**
     * @description
     *
     * Contraseña de la base de datos.
     * @example {Tr4nsp0rt3s}
     */
    password: process.env.TYPEORM_PASSWORD,

    /**
     * @description
     * El conjunto de caracteres para la conexión.
     * Esto se denomina "intercalación" en el nivel SQL de MySQL
     * (como utf8_general_ci). Si se especifica un conjunto
     * de caracteres de nivel SQL (como utf8mb4),
     * se utiliza la intercalación predeterminada para ese conjunto de caracteres.
     * (Predeterminado:) UTF8_GENERAL_CI.
     */
    charset: process.env.TYPEORM_CHARSET,

    /**
     * @description
     * la zona horaria configurada en el servidor MySQL.
     * Esto se utiliza para encasillar los valores de
     * fecha/hora del servidor en el objeto Fecha de
     * JavaScript y viceversa. Esto puede ser local,
     * Zo un desplazamiento en el formulario +HH:MMo -HH:MM.
     * (Por defecto: local)
     */
    timezone: process.env.TYPEORM_TIMEZONE,

    /**
     * @description
     * Permitir conectarse a instancias de MySQL que soliciten
     * el antiguo método de autenticación [inseguro].
     * por defecto [false]
     */
    insecureAuth: process.env.TYPEORM_INSECUREAUTH === 'true' ? true : false,

    /**
     *
     */
    cache: process.env.TYPEORM_CACHE === 'true' ? true : false,

    /**
     * @description
     * Entidades a cargar y utilizar para esta conexión.
     * Acepta tanto las clases de entidad como las rutas
     * de directorios para cargar.
     * Los directorios soportan patrones globales.
     */
    entities: requireAllClasses(entitiesContexts),

    /**
     * @description
     * Migraciones a cargar y utilizar para esta conexión.
     * Acepta tanto las clases de migración como los directorios para cargar.
     * Los directorios soportan patrones globales
     */
    migrations: requireAllClasses(migrationsContexts),

    /**
     * @ADVERTENCIA
     * @description
     * Indica si el esquema de la base de datos debe crearse automáticamente
     * en cada inicio de la aplicación. Tenga cuidado con esta opción
     * y no la use en producción; de lo contrario,
     * puede perder datos de producción. Esta opción es útil durante
     * la depuración y el desarrollo. Como alternativa,
     * puede usar la CLI y ejecutar el comando schema: sync.
     * Tenga en cuenta que para la base de datos MongoTYPEORM no crea un esquema,
     * ya que MongoTYPEORM no tiene esquemas. En su lugar,
     * se sincroniza simplemente creando índices.
     */
    synchronize: process.env.TYPEORM_SYNCHRONIZE === 'true' ? true : false,

    /**
     * @description
     * Indica si las migraciones deben ejecutarse automáticamente
     * en cada inicio de aplicación. Como alternativa,
     * puede usar CLI y ejecutar la migración: ejecutar el comando.
     */
    migrationsRun: process.env.TYPEORM_MIGRATIONS_RUN === 'true' ? true : false,

    /**
     * @description
     * Indica si el registro está habilitado o no.
     * Si se configura en [true], la consulta y
     * el registro de errores estarán habilitados.
     * También puede especificar diferentes tipos de registro para habilitar,
     * @Ejemplo ["query", "error", "schema"]
     */
    logging: process.env.TYPEORM_LOGGING,

    /**
     * @description
     * Registrador para ser utilizado para fines de registro.
     * Los valores posibles son:
     * "consola avanzada", "consola simple" y "archivo".
     * El valor predeterminado es "consola avanzada".
     * También puede especificar una clase de registrador que implementa
     * la Logger interfaz. Aprenda más sobre el registro .
     */
    logger: process.env.TYPEORM_LOGGER,

    /**
     * @description
     *  Elimina el esquema cada vez que se establece la conexión. 
     * Tenga cuidado con esta opción y no lo use en producción, 
     * de lo contrario perderá todos los datos de producción. 
     * Esta opción es útil durante la depuración y el desarrollo.
     */
    dropSchema: process.env.TYPEORM_DROP_SCHEMA === 'true' ? true : false,

    /**
     * @description
     * Nombre de la tabla en la base de datos que va a contener 
     * información sobre las migraciones ejecutadas. 
     * De forma predeterminada, esta tabla se denomina "migraciones".
     */
    migrationsTableName: process.env.TYPEORM_MIGRATIONS_TABLE_NAME,

    /**
     * @description
     *  Directorio donde las
     * [Entities] [Migrations] [subscribers]
     * deben ser creadas por defecto por CLI.
     */
    cli: {
        entitiesDir: process.env.TYPEORM_CLI_ENTITIES_DIR,
        migrationsDir: process.env.TYPEORM_CLI_MIGRATIONS_DIR,
    },

    autoLoadEntities: true
} as TypeOrmModuleOptions));
