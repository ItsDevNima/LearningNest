import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessagesRepository {
    async findOne(id: string) {
        const contents = await readFile('messages.json', 'utf-8');
        const messages = JSON.parse(contents);

        return messages[id];
    }

    async findAll() {
        const content = await readFile('messages.json', 'utf-8');
        const messages = JSON.parse(content);

        return messages;
    }

    async create(content: string, career: string, age: number) {
        const contents = await readFile('messages.json', 'utf-8');
        const messages = JSON.parse(contents);

        messages.push({
            [messages.length]: {
                id: messages.length,
                content,
                career,
                age,
            },
        });

        await writeFile('messages.json', JSON.stringify(messages), 'utf8');
    }
}
