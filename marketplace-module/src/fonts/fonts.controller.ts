import { Controller, Get, Post, Body } from '@nestjs/common';
import { FontsService } from './fonts.service';
import { Font } from './font.interface';

@Controller('fonts')
export class FontsController {
  constructor(private readonly fontsService: FontsService) {}

  @Get()
  getAllFonts(): Font[] {
    return this.fontsService.getAllFonts();
  }

  @Post()
  createFont(@Body() fontData: { name: string; price: number }): Font {
    return this.fontsService.createFont(fontData);
  }
}