import { Pipe, PipeTransform } from '@angular/core';

/**
 * Converte la sintassi Markdown inline in HTML:
 *   **testo** → <strong>testo</strong>
 *   *testo*   → <em>testo</em>
 *   `testo`   → <code>testo</code>
 *
 * Da usare con [innerHTML] nel template.
 */
@Pipe({
  name: 'parseMarkdown',
  standalone: true,
})
export class ParseMarkdownPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';

    return value
      // **grassetto**
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      // *corsivo*
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      // `codice`
      .replace(/`(.+?)`/g, '<code>$1</code>');
  }

}