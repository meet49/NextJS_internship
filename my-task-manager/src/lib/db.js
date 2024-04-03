const {name,password} = process.env
export const connectionStr = `mongodb+srv://msopash:${password}@cluster0.go2b5dc.mongodb.net/productDB?retryWrites=true&w=majority&appName=Cluster0`