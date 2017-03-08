const net=require('net')
const clients=[]
const server=net.createServer()
server.on('connection',soc=>{
  // 接收 处理 转发
  clients.push(soc)
  //console.log(clients.length)
  soc
    .on('data',data=>{
      broadcast(soc,data)
    })
    .on('end',()=>{
      clients.splice(clients.indexOf(soc),1)
    })
    .on('error',()=>{
      clients.splice(clients.indexOf(soc),1)
    })
})

server.listen(3000,()=>{
  console.log('server run at 3000')
})

// 分发数据
function broadcast(client,msg){
  clients.forEach(c=>{
    if(client!==c){
      c.write(msg)
    }
  })
}