---
author: shane-lin
date: 2025-12-08
layout: post
slug: openai-docs
title: The OpenAI API documentation is very bad 
categories:
- Digital Humanities
tags:
- Code
---
The OpenAI API docs are very bad. In my experience as a coder, I've come across my share of bad documentation. Typically, this is because the documentation is poorly organized, too spare, or missing coverage. Or it's because the design of the API itself is badly conceived, inconsistent, or contains the accumulated cruft of years (or decades!) of bloat and abandoned features.

But I can't recall ever seeing documentation that contains code samples that are both wrong and also *syntactically* wrong. It's bad enough that it comes across as documentation written by GPT--and not even a recent model.

Take [this example](https://platform.openai.com/docs/guides/migrate-to-responses?lang=python#3-update-multi-turn-conversations), part of an entry under the "Core Concepts" section:

{% highlight python %}
context = [
    { "role": "role", "content": "What is the capital of France?" }
]
res1 = client.responses.create(
    model="gpt-5",
    input=context,
)

// Append the first response’s output to context
context += res1.output

// Add the next user message
context += [
    { "role": "role", "content": "And it's population?" }
]

res2 = client.responses.create(
    model="gpt-5",
    input=context,
)
{% endhighlight %}

The Python code sample here is not syntactically correct. The comments use the '//' convention of C/Java/Javascript in-line comments, rather than Python's '#'. Additionally, OpenAI has the concept of a role, which indicates who (e.g. the system, the user, the model's responder) is "speaking." The string "role" is not a valid value for this and making an API call with it results in an error:

> openai.BadRequestError: Error code: 400 - {'error': {'message': "Invalid value: 'role'. Supported values are: 'assistant', 'system', 'developer', and 'user'.", 'type': 'invalid_request_error', 'param': 'input[3]', 'code': 'invalid_value'}}

So, there are a total of 7 code statements in this sample, including the comments, and 4 of them have errors. The thing is, GPT-5 is actually pretty good at writing code. It's even capable of executing Python code in an internal environment. We can see this facility in action by simply asking ChatGPT to debug the code from the OpenAI documentation.

![ChatGPT response indicating the two errors from the OpenAI API documentation](/assets/post-media/2025-10-29-openai-docs-debug.png)

This is a mode of LLM use that I haven't had a lot of luck with, but here it pinpoints the two errors perfectly. 

When documentation is bad in a common fashion, it typically creates a frustrating programming experience. And, to be clear, the OpenAI docs are bad in some of those ways too. But the sheer lack of care it demonstrates is both shocking for all the ways that Tech has integrated AI into our world and, frankly, majestic. Like making a horse consul or completely blowing up the system of global trade.