export function GET(req) {
    console.log('getting')
    req.send({message: 'holam unod'})
}