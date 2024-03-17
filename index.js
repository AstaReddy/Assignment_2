function count_vowels_consonants() {
    const user_input = document.getElementById('input_text').value;
    let vowel_count = 0;
    let consonant_count = 0;
    const vowels = "aeiouAEIOU";

    for (let i = 0; i < user_input.length; i++) {
        if (vowels.includes(user_input[i])) {
            vowel_count++;
        } else if (user_input[i].toLowerCase() !== user_input[i].toUpperCase()) {
            consonant_count++;
        }
    }

    document.getElementById('count_result').innerText = `Vowels: ${vowel_count}, Consonants: ${consonant_count}`;
}

function check_palindrome() {
    const user_input = document.getElementById('input_number').value;
    const is_palindrome = user_input === user_input.split('').reverse().join('');
    
    document.getElementById('palindrome_result').innerText = is_palindrome ? 'It is a palindrome.' : 'It is not a palindrome.';
}

function calculate_tip_total() {
    const subtotal = parseFloat(document.getElementById('input_total').value);
    const tip_percentage = parseFloat(document.getElementById('input_tip').value);
    const tip_amount = subtotal * (tip_percentage / 100);
    const total = subtotal + tip_amount;
    
    document.getElementById('tip_result').innerText = `Tip Amount: $${tip_amount.toFixed(2)}, Total Amount to be Paid (Including Tip): $${total.toFixed(2)}`;

}
