# Using Cross Entropy to Solve Caesar Ciphers

The [Caesar cipher](caesar) is a simple technique to obscure text.
To encipher the message `"the enemy knows the system"`, replace every letter with the $n$th subsequent letter.
And, if necessary, wrap to the beginning of the alphabet.
If $n$ is 7, the enciphered message is `"aol lultf ruvdz aol zfzalt"`.
To decrypt the ciphertext, simply reverse the process.

```ruby
def caesar(str, num)
  alphabet = ("a".."z").to_a

  str.tr(alphabet.join, alphabet.rotate(num).join)
end
```

Anyone can break a [Caesar cipher](caesar) by writing down all 26 possibilities and selecting the one that "looks like English."
However, computers have a much harder time picking the one that "looks like English."
While [sophisticated language models](gpt2) make this possible, one may not be justified.
And even if it is, the performance of simpler solutions often serve as baselines to more sophisticated solutions.

[Information theory](information_theory) quantifies randomness with [entropy](entropy).
Furthermore, [cross-entropy](cross_entropy) quantifies the "difference" between two distributions, even when the distributions are unknown!
By measuring the [cross-entropy](cross_entropy), software can identify the Caesar rotation that "looks like English."
The following function measures the [cross-entropy](cross_entropy) between a string and English letter frequencies.

```ruby
def cross_entropy(str)
  freq = {
    a: 0.08167, b: 0.01492, c: 0.02782, d: 0.04253,
    e: 0.12702, f: 0.02228, g: 0.02015, h: 0.06094,
    i: 0.06966, j: 0.00153, k: 0.00772, l: 0.04025,
    m: 0.02406, n: 0.06749, o: 0.07507, p: 0.01929,
    q: 0.00095, r: 0.05987, s: 0.06327, t: 0.09056,
    u: 0.02758, v: 0.00978, w: 0.02360, x: 0.00150,
    y: 0.01974, z: 0.00074,
  }

  str = str.downcase.gsub(/[^a-z]/, '')
  sum = str.chars.reduce(0) do |sum, char|
    sum + Math.log2(freq[char.to_sym])
  end

  -sum / str.length
end
```

Software can solve a [Caesar cipher](caesar) automatically if the original English has the lowest [cross-entropy](cross_entropy).

```ruby
def rotation_minimizing_cross_entropy(str)
  Array(0..25).min do |a, b|
    cross_entropy(caesar(str, a)) <=> cross_entropy(caesar(str, b))
  end
end
```

To assess the efficacy of using [cross-entropy](cross_entroy) to decipher [Caesar ciphers](caesar),
  a function will count the number of automatically solvable [Caesar ciphers](caesar).
[Faisal N. Jawdat's](quotes) diverse list of over 6,000 quotes should provide a good indication of performance.

```ruby
def main
  require 'json'

  correct = 0

  quotes = JSON.parse(File.open("../data/20210322-faisal-quotes.json").read)
  quotes.each do |quote|
    correct += 1 if 0 == rotation_minimizing_cross_entropy(quote["text"])
  end

  accuracy = sprintf("%.02f%%", correct.to_f / (quotes.length) * 100)
  puts "Incorrect: #{quotes.length - correct}"
  puts "Correct: #{correct}"
  puts "Accuracy: #{accuracy}"
end
```

Out of 6,090 quotations, only 23 of them were incorrectly identified.
The majority of the incorrectly identified quotes where short or repetitive.

> Trust, but verify.  
> Your zen-fu sucks.  
> Have car, will travel.  
> No job too big; no fee too big!  
> Never give in. Never. Never. Never. Never.  
> lo, i am lame  
> correctly.  

Other were simply unfair.

> When cryptography is outlawed, bayl bhgynjf jvyy unir pelcgb.

A word-aware [language model](lang_model) should out-perform models based on character [unigrams](ngram).
However, [cross-entropy](cross_entropy) is remarkably good at deciphering English [Caesar ciphers](caesar).
What else can [cross-entropy](cross_entropy) do?

[caesar_cipher]: https://en.wikipedia.org/wiki/Caesar_cipher
[cross_entropy]: https://en.wikipedia.org/wiki/Cross_entropy
[entropy]: https://en.wikipedia.org/wiki/Entropy_%28information_theory%29
[gpt2]: https://en.wikipedia.org/wiki/GPT-2
[information_theory]: https://en.wikipedia.org/wiki/Information_theory
[lang_model]: https://en.wikipedia.org/wiki/Language_model
[ngram]: https://en.wikipedia.org/wiki/N-gram
[quotes]: http://faisal.com/q/about.html
