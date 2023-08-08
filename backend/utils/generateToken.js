import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '80d',
  });

  //set JWT as cookie
  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'strict',

    maxAge: 1000 * 60 * 60 * 24 * 80, // 80 days
  });
};

export default generateToken;
