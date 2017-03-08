#!/usr/bin/env node
const net=require('net')
const client=net.connect({host:'138.197.214.216',port:3000})
const argv=process.argv
const cmd=argv.slice(2).join(' ')
client.on('connect',()=>{
  client.write(cmd,()=>{
    console.log('指令发送成功')
  })
})
client.on('data',data=>{
  console.log(data.toString())
  client.end()
})