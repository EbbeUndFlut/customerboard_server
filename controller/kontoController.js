export const kontostand = (req, res) => {
    res.status(200).json([{ name: 'katrin', konto: 1000000 }, { name: 'christian', konto: -495 }])
}