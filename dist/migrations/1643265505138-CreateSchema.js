"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSchema1643265505138 = void 0;
class CreateSchema1643265505138 {
    constructor() {
        this.name = 'CreateSchema1643265505138';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`test\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`test\``);
    }
}
exports.CreateSchema1643265505138 = CreateSchema1643265505138;
//# sourceMappingURL=1643265505138-CreateSchema.js.map