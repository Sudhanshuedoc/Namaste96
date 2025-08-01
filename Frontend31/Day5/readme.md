# Debounce & Throttle Examples

This repository contains simple and practical JavaScript examples demonstrating the core concepts of **Debouncing** and **Throttling** — two important performance optimization techniques commonly used in frontend development, especially in event handling like scroll, resize, input, and button clicks.

## 🔍 What’s Inside

- `debounce.js`:  
  Contains a reusable debounce function that limits the rate at which a function is executed. Useful for events like `onInput`, `onKeyUp`, or `search bar`.

- `throttle.js`:  
  Contains a reusable throttle function that ensures a function is only called once every specified interval. Useful for `scroll`, `resize`, or `mouse move` events.

## 🧠 Concepts

### ✅ Debounce

> Debouncing delays the execution of a function until after a certain period has passed since the last time it was invoked.  
> It’s ideal for reducing function calls when the user is actively typing or interacting.

**Example Use Cases:**

- Auto-suggest search box
- Form input validation
- Resize or scroll event handling

### ✅ Throttle

> Throttling ensures a function is executed at most once in a specified interval, even if it's triggered many times.  
> It’s useful when you want regular updates but don’t want to overload the browser.

**Example Use Cases:**

- Scroll position tracking
- Window resizing
- Button spam prevention

## 💡 Getting Started

Clone this repo:

```bash
git clone https://github.com/your-username/debounce-thrott
```
