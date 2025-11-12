import re

input_file = r"report\utils\input.txt"
output_file = r"report\utils\output.txt"

SELF_CLOSING_TAGS = {"area", "base", "br", "col", "embed", "hr", "img", 
                     "input", "link", "meta", "param", "source", "track", "wbr"}

def escape_html(text):
    return text.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")

def format_html(html):
    tokens = re.findall(r'(</?[^>]+>)|([^<]+)', html)
    result = []
    indent_level = 0

    for tag, text in tokens:
        if tag:
            tag = tag.strip()
            tag_name_match = re.match(r'</?([a-zA-Z0-9]+)', tag)
            tag_name = tag_name_match.group(1).lower() if tag_name_match else ""
            
            if tag.startswith("</"):
                indent_level -= 1

            result.append(" " * (indent_level * 4) + escape_html(tag))

            if (tag.startswith("<") and not tag.startswith("</") 
                and not tag.endswith("/>") and tag_name not in SELF_CLOSING_TAGS):
                indent_level += 1

        elif text:
            stripped_text = text.strip()
            if stripped_text:
                result.append(" " * (indent_level * 4) + escape_html(stripped_text))

    return "\n".join(result)

with open(input_file, "r", encoding="utf-8") as f:
    content = f.read()

formatted_content = format_html(content)

with open(output_file, "w", encoding="utf-8") as f:
    f.write(formatted_content)
