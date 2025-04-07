import { Injectable } from '@nestjs/common';
import { Font } from './font.interface';

@Injectable()
export class FontsService {
  private fonts: Font[] = [];

  createFont(fontData: { name: string; price: number }): Font {
    const newFont = {
      id: this.fonts.length + 1,
      ...fontData,
    };
    this.fonts.push(newFont);
    return newFont;
  }

  getAllFonts(): Font[] {
    return this.fonts;
  }
}