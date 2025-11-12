# 🧮 Calculator Collaboration Project

Project kalkulator kolaboratif untuk 7 anggota tim menggunakan **Fork Workflow**.

## 📋 Deskripsi Project

Project ini adalah kalkulator sederhana yang dikembangkan secara kolaboratif dengan pembagian task untuk setiap anggota tim.

## 👥 Anggota Tim & Pembagian Task

| Task | Fitur | PIC | Status |
|------|-------|-----|--------|
| Task 1 | Penambahan (Addition) | [Ari](https://github.com/ariboss89) | ✅ DONE |
| Task 2 | Pengurangan (Subtraction) | [Hilmy](https://github.com/hilmy07) | ✅ DONE |
| Task 3 | Perkalian (Multiplication) | [Virgil](https://github.com/VirgilIw) | 🔄 In Progress |
| Task 4 | Pembagian (Division) | [ghifar](https://github.com/ghifar1327) | ✅ Done |
| Task 5 | Modulus (Remainder) | [albaihaqi](https://github.com/Albaihaqi354) | 🔄 In Progress |
| Task 6 | Pangkat (Power) | [rahman](https://github.com/rahmans11) | 🔄 In Progress |
| Task 7 | Akar Kuadrat (Square Root) | [adit](https://github.com/adityabastyas) | 🔄 In Progress |



## 🌿 Branch Structure

```
main (production)
  └── dev (development)
       ├── feature/addition
       ├── feature/subtraction
       ├── feature/multiplication
       ├── feature/division
       ├── feature/modulus
       ├── feature/power
       └── feature/square-root
```

## 🚀 Cara Kolaborasi (Fork Workflow)

### 1️⃣ Fork Repository

1. Klik tombol **Fork** di pojok kanan atas repository ini
2. Repository akan ter-copy ke akun GitHub Anda

### 2️⃣ Clone Repository Fork Anda

```bash
# Clone repository fork Anda (ganti 'your-username' dengan username GitHub Anda)
git clone https://github.com/your-username/calculator-collab.git

# Masuk ke folder project
cd calculator-collab
```

### 3️⃣ Setup Remote Upstream

```bash
# Tambahkan remote upstream (repository utama)
git remote add upstream https://github.com/mhakimsaputra17/calculator-collab.git

# Verifikasi remote
git remote -v
```

Output yang diharapkan:
```
origin    https://github.com/your-username/calculator-collab.git (fetch)
origin    https://github.com/your-username/calculator-collab.git (push)
upstream  https://github.com/mhakimsaputra17/calculator-collab.git (fetch)
upstream  https://github.com/mhakimsaputra17/calculator-collab.git (push)
```

### 4️⃣ Buat Branch Baru untuk Task Anda

```bash
# Update branch dev dari upstream
git fetch upstream
git checkout dev
git merge upstream/dev

# Buat branch baru sesuai task Anda
# Contoh untuk Task 1 (Addition):
git checkout -b feature/addition

# Atau sesuaikan dengan task Anda:
# git checkout -b feature/subtraction
# git checkout -b feature/multiplication
# git checkout -b feature/division
# git checkout -b feature/modulus
# git checkout -b feature/power
# git checkout -b feature/square-root
```

### 5️⃣ Kerjakan Task Anda

```bash
# Buat atau edit file sesuai task Anda
# Contoh: nano calculator.py (atau editor favorit Anda)

# Tambahkan perubahan ke staging
git add .

# Commit perubahan dengan pesan yang jelas
git commit -m "feat: implement addition function"

# Push ke fork repository Anda
git push origin feature/addition
```

### 6️⃣ Buat Pull Request

1. Buka repository fork Anda di GitHub
2. Klik tombol **Compare & pull request**
3. **Base repository**: `mhakimsaputra17/calculator-collab` - **base**: `dev`
4. **Head repository**: `your-username/calculator-collab` - **compare**: `feature/addition`
5. Isi deskripsi PR dengan detail perubahan
6. Klik **Create pull request**

### 7️⃣ Sinkronisasi dengan Repository Utama

Sebelum mulai task baru atau melanjutkan, selalu update dari upstream:

```bash
# Checkout ke branch dev
git checkout dev

# Fetch dan merge dari upstream
git fetch upstream
git merge upstream/dev

# Push update ke fork Anda
git push origin dev
```

## 📁 Struktur Project

```
calculator-collab/
├── README.md
├── CONTRIBUTING.md
├── calculator.py (atau sesuai bahasa yang digunakan)
├── tests/
│   └── test_calculator.py
└── docs/
    └── api.md
```

## 🛠️ Tech Stack

- **Language**: Python / JavaScript / Java (sesuaikan dengan pilihan tim)
- **Version Control**: Git & GitHub
- **Workflow**: Fork & Pull Request

## 📝 Commit Message Convention

Gunakan format commit message yang jelas:

```
feat: menambahkan fitur baru
fix: memperbaiki bug
docs: update dokumentasi
test: menambahkan test
refactor: refactoring code
```

Contoh:
```bash
git commit -m "feat: implement addition function"
git commit -m "fix: handle division by zero"
git commit -m "docs: update README with setup instructions"
```

## ✅ Checklist untuk Setiap Task

- [ ] Fork repository utama
- [ ] Clone fork ke local
- [ ] Setup remote upstream
- [ ] Buat branch sesuai task
- [ ] Implementasi fitur
- [ ] Test fungsi
- [ ] Commit dengan pesan yang jelas
- [ ] Push ke fork
- [ ] Buat Pull Request ke `dev` branch
- [ ] Tunggu review dan approval

## 🤝 Code Review Process

1. Setiap PR akan di-review oleh maintainer atau anggota tim lain
2. Lakukan perubahan jika ada request dari reviewer
3. Setelah approved, PR akan di-merge ke branch `dev`
4. Setelah semua task selesai, branch `dev` akan di-merge ke `main`

## 📞 Kontak & Support

Jika ada pertanyaan atau kendala:
- Buat issue di repository ini
- Hubungi maintainer: [@mhakimsaputra17](https://github.com/mhakimsaputra17)

## 📖 Resources

- [Git Fork Workflow Guide](https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow)
- [GitHub Pull Request Tutorial](https://docs.github.com/en/pull-requests)
- [Conventional Commits](https://www.conventionalcommits.org/)

---

**Happy Coding! 🚀**

Made with ❤️ by Team Calculator
