import express , {json} from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';


dotenv.config();

const app = express();
const PORT = 3000;
app.disable('x-powered-by')
app.use(express.static('dist'));
app.use(cors());
app.use(json())
app.use(cors())

app.use(bodyParser.json());
app.get('/',(req,res)=>{
    
})
app.post('/send-email', (req, res) => {
    const { nombre, email, mensaje } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS
        }
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL,
        subject: `Nuevo mensaje de ${nombre}`,
        text: `Nombre: ${nombre}\nEmail: ${email}\nMensaje:\n${mensaje}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error al enviar el correo:', error);
            return res.status(500).send('Error al enviar el correo.');
        }
        res.status(200).send('Correo enviado correctamente.');
    });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
