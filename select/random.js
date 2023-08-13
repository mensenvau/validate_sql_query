const RandExp = require('randexp');

let regexp = /\s*SELECT\s+(?:\"[A-Za-z0-9\s\$\%\*\(\)\_\+\&]+\"|\*|[A-Za-z_]\w*)(?:\s+AS\s+[A-Za-z_]\w*)?(?:\s*,\s*(?:\"[A-Za-z0-9\s\$\%\*\(\)\_\+\&]+\"|\*|[A-Za-z_]\w*)(?:\s+AS\s+[A-Za-z_]\w*)?)*\s+FROM\s+(?:\"[A-Za-z0-9\s\$\%\*\(\)\_\+\&]+\"|[A-Za-z_]\w*)(?:\s+AS\s+[A-Za-z_]\w*)?\s*$/gi

// build random value!
console.log(new RandExp(regexp).gen())