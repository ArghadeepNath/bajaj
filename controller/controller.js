const handleBfhlRequest = (req, res) => {
    try {
        const inputData = req.body.data;

        if (!Array.isArray(inputData)) {
            return res.status(400).json({ is_success: false, error: "Invalid data format" });
        }

        const odd_numbers = [];
        const even_numbers = [];
        const alphabets = [];
        const special_characters = [];
        const concatLetters = [];
        let sum = 0;

        const isAlphabet = (str) => /^[a-zA-Z]+$/.test(str);
        const isNumber = (str) => /^\d+$/.test(str);

        for (const item of inputData) {
            if (isNumber(item)) {
                const num = parseInt(item);
                if (num % 2 === 0) even_numbers.push(item);
                else odd_numbers.push(item);
                sum += num;
            } else if (isAlphabet(item)) {
                alphabets.push(item.toUpperCase());
                concatLetters.push(item); // full item (like 'abc') as string
            } else {
                special_characters.push(item);
            }
        }

        const flatLetters = concatLetters.join('').split('').reverse();
        const concat_string = flatLetters.map((char, i) =>
            i % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
        ).join('');

        const response = {
            is_success: true,
            user_id: "arghadeep_nath_10022005",
            email: "arghadeep152.be22@chitkara.edu.in",
            roll_number: "2210990152",
            odd_numbers,
            even_numbers,
            alphabets,
            special_characters,
            sum: sum.toString(),
            concat_string
        };

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ is_success: false, error: "Internal Server Error" });
    }
};

module.exports = { handleBfhlRequest };
