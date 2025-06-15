# CodeQL Static Analysis Workflow

This repository uses **GitHub CodeQL** to automatically scan JavaScript code for security vulnerabilities and code quality issues every time code is pushed to the `main` branch or a pull request is opened.

## 🔍 What is CodeQL?

[CodeQL](https://codeql.github.com/) is GitHub’s static analysis engine that scans your codebase for security vulnerabilities and coding errors. It can identify issues like SQL injection, XSS, and other common security flaws.

---

## 🚀 Workflow Trigger

The workflow is triggered automatically on the following events:

- ✅ Push to the `main` branch  
- ✅ Pull requests targeting the `main` branch

---

## ⚙️ Workflow Breakdown

Filename: `.github/workflows/codeql-analysis.yml`

### Steps:

1. **Checkout Repository**
   - Uses `actions/checkout@v4` to clone the repo into the workflow runner.

2. **Initialize CodeQL**
   - Sets up CodeQL with the language `javascript`.

3. **Autobuild**
   - Attempts to automatically detect and build the project before analysis.

4. **CodeQL Analysis**
   - Runs the CodeQL scanner to detect potential vulnerabilities and writes results to GitHub's Security tab.

---

## 🔐 Permissions

The job requires the following GitHub token permissions:

- `actions: read`  
- `contents: read`  
- `security-events: write` – to upload CodeQL results

These are configured under the `permissions` key in the YAML file.

---

## 📁 Results Location

After the workflow runs, the scan results will be available in:

> **GitHub Repository → Security Tab → Code scanning alerts**

---

## 🧪 Supported Language

This pipeline currently analyzes:

- `JavaScript`

> To add more languages (e.g., Python, Java), update the `matrix.language` list in the YAML file.

---

## ✅ How to Enable

Make sure this file exists in your repo:

