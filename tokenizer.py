import tiktoken
import sys

encoding = tiktoken.get_encoding("cl100k_base")
encoding = tiktoken.encoding_for_model("gpt-3.5-turbo")

def num_tokens(string: str, encoding_name: str) -> int:
    encoding = tiktoken.get_encoding(encoding_name)
    num_tokens = len(encoding.encode(string))
    return num_tokens

result = num_tokens(sys.argv[1], sys.argv[2])
result2 = str(result)
sys.argv.append(result2)