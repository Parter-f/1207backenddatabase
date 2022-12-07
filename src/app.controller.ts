import { Get, Controller, Render } from '@nestjs/common';
import db from './db';

@Controller()
export class AppController {
  @Get()
  @Render('list')
  async listPaintings() {

   const[ rows ] = await db.execute('SELECT title FROM paintings');

    return {
      paintings: rows,
    };
  }
}
