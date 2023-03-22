import { container } from "tsyringe"
import { Bootstrap } from "../../App/Spents/Bootstrap/Bootstrap"
import { DbTypeConnectionTypeEnum } from "./DbConnectionTypeEnum"
import { MySqlConnection } from "./My-Sql/MySqlConnection"

export class DBBoostrap implements Bootstrap {
    async handler(): Promise<void> {
        container.register<MySqlConnection>(DbTypeConnectionTypeEnum.CONNECTION, {
            useValue: new MySqlConnection({
                host: process.env.MYSQL_HOST as string,
                user: process.env.MYSQL_USER as string,
                password: process.env.MYSQL_PASSWORD as string,
                database: process.env.MYSQL_DATABASE as string
            })
        })
    }

    static from(): DBBoostrap {
        return new DBBoostrap()
    }
}