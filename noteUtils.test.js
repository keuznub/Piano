import { expect, test } from "vitest"
import getNoteFromKey from "./noteUtils"


test('si le paso la letra "a" devolverá "C4"', () => {
    let note = getNoteFromKey('a')
    expect(note).toBe('C4')
})


test('Que pasa si le paso A mayus', () => {
    let note = getNoteFromKey('A')
    expect(note).toBe('C4')
})

test('Que pasa si le paso null', () => {
    let note = getNoteFromKey(null)
    expect(note).toBe(undefined)
})