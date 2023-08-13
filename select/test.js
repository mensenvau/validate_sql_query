
let validateIsSelect = (query) => {
    let regexp = /\s*SELECT\s+(?:\"[A-Za-z0-9\s\$\%\*\(\)\_\+\&]+\"|\*|[A-Za-z_]\w*)(?:\s+AS\s+[A-Za-z_]\w*)?(?:\s*,\s*(?:\"[A-Za-z0-9\s\$\%\*\(\)\_\+\&]+\"|\*|[A-Za-z_]\w*)(?:\s+AS\s+[A-Za-z_]\w*)?)*\s+FROM\s+(?:\"[A-Za-z0-9\s\$\%\*\(\)\_\+\&]+\"|[A-Za-z_]\w*)(?:\s+AS\s+[A-Za-z_]\w*)?\s*$/gi
    return regexp.test(query);
}

// test list!
let tests = [
    ["select * from test", true],
    ["select * from test as b", true],
    ["select *,test as name,hi as test from test as b", true],
    ["select *,test as name,hi as test from test as b", true],
    ["select dfv from test as b", true],
    ["select  from test as b", false],
    ["select ,,, from test as b", false],
    ["select name as name as name from test as b", false],
    ["select xixix from test as b", true]
]

for (let item of tests) {
    console.assert(validateIsSelect(item[0]) == item[1])
}