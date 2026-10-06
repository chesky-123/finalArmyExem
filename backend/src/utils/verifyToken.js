import jwt from 'jsonwebtoken'

export function authenticate(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1] 
    console.log('token');
    
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET )
        req.user = decoded
        console.log(decoded);
         
        next() 
    } catch (error) {
        return res.status(403).json({message: "Forbidden" })
    }
}