export function safeCell(value:unknown){const text=String(value??'');return /^[\s\u0000-\u001f]*[=+@\-\t\r]/.test(text)?`'${text}`:text}
export function safeFilename(name:string){return name.normalize('NFKD').replace(/[^a-zA-Z0-9_-]+/g,'-').replace(/^-+|-+$/g,'').slice(0,60)||'Untitled'}
