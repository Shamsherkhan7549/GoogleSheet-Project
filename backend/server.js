const express = require('express')
const cors = require('cors')
const { GoogleSpreadsheet } = require('google-spreadsheet')
const { JWT } = require('google-auth-library')
const dotenv  = require('dotenv')
dotenv.config()

const app = express()
const port = 8080

// middleware
app.use(cors())
app.use(express.json())

const accesSheet = async () => {
    try{

    const serviceAccountAuth = new JWT({

        email: process.env.GOOGLE_CLIENT_EMAIL,
        key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const doc = new GoogleSpreadsheet('1oX7ldGehWHGyoDZGN8KEZJ5y_vAwK_brJhax3YJSHjA', serviceAccountAuth);

    await doc.loadInfo();
    // console.log(doc.title);
    // await doc.updateProperties({ title: 'D-Table Analytics' });

    const sheet = doc.sheetsByIndex[0];
    return sheet;
    }catch(error){
        console.error('Error accessing sheet:', error);
        throw error;
    }
    
}

app.get('/', (req, res) => {
    res.send('API Working!')
})

app.get('/data', async (req, res) => {
    try {
       
        const sheet = await accesSheet()
        const rows = await sheet.getRows()
        res.json(rows.map(ele => ele._rawData))
    } catch (error) {
        console.error('Error fetching data:', error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

app.put('/data/:id', async (req, res) => {
   
    try {
         const { id } = req.params;
        const { status } = req.body;
        const sheet = await accesSheet()
        const rows = await sheet.getRows()
        const row = rows.find(r => r._rawData[1].split('/')[1] === id);
       
        if (row) {
            row._rawData[6] = status;
            await row.save();
            res.json({success:true, message: 'Status updated successfully' });
        } else {
            res.status(404).json({ success:false, error: 'Row not found' });
        }
    } catch (error) {
        console.error('Error fetching data:', error)
        res.status(500).json({success:false, error: 'Internal Server Error' })
    }
})



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
