import * as ascii2mathml from 'ascii2mathml';

let fn = ascii2mathml({}); // $ExpectType Function
fn(''); // $ExpectType string
ascii2mathml('', {}); // $ExpectType string

// $ExpectType string
ascii2mathml('', {
    decimalMark: '.',
    colSep: ',',
    rowSep: ';',
    display: 'inline',
    dir: 'ltr',
    bare: false,
    standalone: false,
    annotate: false
});
