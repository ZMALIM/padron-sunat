import { 
    Entity, 
    Column, 
    PrimaryGeneratedColumn, 
    CreateDateColumn, 
    UpdateDateColumn 
} from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity('user')
export class User 
{
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({
        name: 'name',
        type: 'char',
        length: 100,
    })
    public name: string;

    @Column({
        name: 'email',
        type: 'varchar',
        length: 255
    })
    public email: string;

    @Column({
        name: 'email_verified_at',
        precision: null,
        nullable: true,
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    public emailVerifietAt: Date;

    @Column({
        name: 'password',
        type: 'varchar',
        length: 500,
        nullable: true
    })
    public password: string;

    @Column({
        name: 'api_token',
        type: 'char',
        length: 80
    })
    public apiToken: string;

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

    public verifiedPassword(password: string): boolean
    {
        return bcrypt.compareSync(password, this.password);
    }
}