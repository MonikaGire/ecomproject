// import { google } from 'googleapis';
// import { NextResponse } from 'next/server';
// import { JWT } from 'google-auth-library';

// export async function POST(req) {
//   const body = await req.json();

//   const auth = new JWT({
//     email: process.env.GOOGLE_CLIENT_EMAIL,
//     key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
//     scopes: ['https://www.googleapis.com/auth/spreadsheets'],
//   });

//   const sheets = google.sheets({ version: 'v4', auth });

//   try {
//     await sheets.spreadsheets.values.append({
//       spreadsheetId: process.env.SHEET_ID,
//       range: 'Sheet1!A1',
//       valueInputOption: 'USER_ENTERED',
//       requestBody: {
//         values: [
//           [body.name, body.email, body.phone, body.company, body.message],
//         ],
//       },
//     });

//     return NextResponse.json({ message: 'Data saved to Google Sheets' });
//   } catch (error) {
//     console.error('Sheets error:', error);
//     return NextResponse.json({ error: 'Failed to save to Sheets' }, { status: 500 });
//   }
// }