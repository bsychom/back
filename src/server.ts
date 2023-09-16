import express from 'express'
import type{Express , Request, Response} from 'express'


const app : Express = express();



app.get('/' , (req, res) =>{
    res.send('hello from server typescript');
})


app.get('/users', (req, res) =>{
    res.send('this is users')
})

app.listen(5000, () =>{
    console.log('server is listeen on port 5000');
})
