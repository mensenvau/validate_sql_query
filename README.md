# validate_sql_query

### SELECT

version 1:
`/\s*SELECT\s+(?:\"[A-Za-z\s\$\%\*\(\)\_\+\&]+\"|\*|[A-Za-z_]\w*)(?:\s+AS\s+[A-Za-z_]\w*)?(?:\s*,\s*(?:\"[A-Za-z\s\$\%\*\(\)\_\+\&]+\"|\*|[A-Za-z_]\w*)(?:\s+AS\s+[A-Za-z_]\w*)?)*\s+FROM\s+(?:\"[A-Za-z\s\$\%\*\(\)\_\+\&]+\"|[A-Za-z_]\w*)(?:\s+AS\s+[A-Za-z_]\w*)?\s*$/gi`

only:

```
select columname from table
select columname as name from table
select columname as name,ddd as name from table
select columname1,columname2 as name,columname3 from table as T
```
