const jwt = require('jsonwebtoken');
const {LoginUser} = require("./api/User.api");

/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
 */

const payload = { sub:1 };
// jwt.sign()
// const secret = process.env.JWT_SECRET || 'secret';
const secret = "12345-67890-09876-54321";

const authenticate = async (ctx, next) =>{
    if (!ctx.headers.authorization) ctx.throw(403, 'No token.');

    const token = ctx.headers.authorization.split(' ')[1];

    console.log('token', token);

    try{
        const number = jwt.verify(token, secret);
        ctx.request.jwtPayload = jwt.verify(token, secret);
        console.log('try' , number.sub);
    }catch(err){
        ctx.throw(err.status || 403,err.text);
    }

    await next();
}

const getToken = async (user) => {

    const User = await LoginUser(user.email, user.password);

    if(User !== null){
        const payload = {sub: User._id};
        const token = jwt.sign(payload, secret, {expiresIn: 3600});

        return {token:token,userID:User._id,type:User.type};
    }
    else {
        return {error:"User can not access."};
    }

};

module.exports = {
    getToken,
    authenticate
}






