let validateIsSelect = (query) => {

    let regexp = /^SELECT\s+(.+?)\s+FROM\s+(.+?)\s*$/i;
    let name_regexp = /^\s*(?:\"[A-Za-z0-9\s\$\%\*\(\)\_\+\&]+\"|\*|[A-Za-z_]\w*)(?:\s+AS\s+[A-Za-z_]\w*)?\s*$/gi

    // const query = "SELECT column1 as sdcfv, \"columnssd 34\" FROM table1 as sdd";
    if (query.match(regexp)) {

        const matches = query.match(regexp);
        const clname = matches[1]; //  output: column1, column2
        const tbname = matches[2]; //  ouput: table1 as sdd

        if (!tbname.match(name_regexp)) {
            // console.log("Table name not match, tablename: " + tbname);
            return false;
        }

        let clarr = clname.split(",");

        for (let i = 0; i < clarr.length; i++) {
            if (!clarr[i].match(name_regexp)) {
                // console.log("Colum name not match, columname: " + clarr[i]);
                return false;
            }
        }

        return true;
    } else {
        // console.log("Not Match!");
        return false;
    }
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