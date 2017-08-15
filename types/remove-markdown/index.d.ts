// Type definitions for remove-markdown v0.1.x
// Project: https://github.com/stiang/remove-markdown
// Definitions by: Muhammad Ragib Hasin <https://github.com/RagibHasin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = RemoveMarkdown

/**
 * Strip Markdown formatting from text
 * @param markdown Markdown text
 * @param options
 */
declare function RemoveMarkdown (markdown: string, options?: {
    stripListLeaders?: boolean
    gfm?: boolean
}): string
