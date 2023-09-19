import tiktoken
from flask import Flask, request
app = Flask(__name__)

encoding = tiktoken.get_encoding("cl100k_base")
encoding = tiktoken.encoding_for_model("gpt-3.5-turbo")

def num_tokens(string: str, encoding_name: str) -> int:
    encoding = tiktoken.get_encoding(encoding_name)
    num_tokens = len(encoding.encode(string))
    return num_tokens

@app.route('/api/tokenizer', methods=['POST'])
def numTok():
    stringtxt = request.form.get('text1', type=str)
    enco = request.form.get('encoding', type=str)

    result = num_tokens(stringtxt, enco)
    result2 = str(result)
    return result2