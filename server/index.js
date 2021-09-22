// node仅支持这种CommonJS的规范，不支持es2015的import方式导入包
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ hi: 'there' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
