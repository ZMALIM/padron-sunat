import { 
    Entity, 
    Column, 
    PrimaryGeneratedColumn, 
    CreateDateColumn, 
    UpdateDateColumn 
} from 'typeorm';

@Entity('taxpayer')
export class TaxPayer 
{
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({
        name: 'ruc',
        type: 'char',
        length: 11,
        nullable: true
    })
    public ruc: string;

    @Column({
        name: 'razon_social',
        type: 'varchar',
        length: 255
    })
    public razonSocial: string;

    @Column({
        name: 'estado',
        type: 'char',
        length: 100,
        nullable: true
    })
    public estado: string;

    @Column({
        name: 'condicion',
        type: 'char',
        length: 155,
        nullable: true
    })
    public condicion: string;

    @Column({
        name: 'ubigeo',
        type: 'char',
        length: 50
    })
    public ubigeo: string;

    @Column({
        name: 'tipo_via',
        type: 'char',
        length: 100
    })
    public tipoVia: string;
    
    @Column({
        name: 'nombre_via',
        type: 'char',
        length: 100
    })
    public nombreVia: string;
    
    @Column({
        name: 'codigo_zona',
        type: 'char',
        length: 155
    })
    public codigoZona: string;

    @Column({
        name: 'tipo_zona',
        type: 'char',
        length: 100
    })
    public tipoZona: string;

    @Column({
        name: 'numero',
        type: 'char',
        length: 155
    })
    public numero: string;

    @Column({
        name: 'interior',
        type: 'char',
        length: 100
    })
    public interior: string;

    @Column({
        name: 'lote',
        type: 'char',
        length: 100
    })
    public lote: string;

    @Column({
        name: 'departamento',
        type: 'char',
        length: 100
    })
    public departamento: string;

    @Column({
        name: 'manzana',
        type: 'char',
        length: 100
    })
    public manzana: string;

    @Column({
        name: 'kilometro',
        type: 'char',
        length: 100
    })
    public kilometro: string;

    @CreateDateColumn({
        name: 'fecha_registro',
        precision: null,
        nullable: true,
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    public fechaRegistro: Date;

    @UpdateDateColumn({
        name: 'fecha_modificacion',
        precision: null,
        nullable: true,
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    public fechaModificacion: Date;
}