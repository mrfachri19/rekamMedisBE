-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 29 Nov 2022 pada 11.23
-- Versi server: 10.4.25-MariaDB
-- Versi PHP: 8.0.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rekammedis`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `data_appointment`
--

CREATE TABLE `data_appointment` (
  `id` int(255) NOT NULL,
  `id_pasien` varchar(255) DEFAULT NULL,
  `appointment` date DEFAULT NULL,
  `kode_periksa` varchar(255) DEFAULT NULL,
  `ruangan` varchar(255) DEFAULT NULL,
  `nama_pasien` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `data_appointment`
--

INSERT INTO `data_appointment` (`id`, `id_pasien`, `appointment`, `kode_periksa`, `ruangan`, `nama_pasien`) VALUES
(19, '2b3f7be8-b5a3-4c44-89f6-43f84c9ae133', '2022-11-26', 'RM120965', 'Mawar 001', 'Santa murella'),
(20, '2b3f7be8-b5a3-4c44-89f6-43f84c9ae133', '2022-11-17', 'KP0002', 'melati 002', 'Santa murella'),
(21, '2b3f7be8-b5a3-4c44-89f6-43f84c9ae133', '2022-11-19', 'KP0099', 'melati 002', 'Santa murella');

-- --------------------------------------------------------

--
-- Struktur dari tabel `data_dokter`
--

CREATE TABLE `data_dokter` (
  `id` int(255) NOT NULL,
  `nama_dokter` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `statusAktif` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `data_dokter`
--

INSERT INTO `data_dokter` (`id`, `nama_dokter`, `username`, `statusAktif`) VALUES
(1, 'dr. Mancunian', 'drman', 'aktif'),
(2, 'dr. Bromanda', 'sumin', 'aktif'),
(3, 'dr. Sumandi', 'sumin', 'aktif'),
(4, 'dr. sulminda', 'sulmin', 'aktif'),
(5, 'dr. Sumak', 'dr. sumak', 'aktif'),
(6, 'dr. suni', 'sum', 'aktif');

-- --------------------------------------------------------

--
-- Struktur dari tabel `data_obat`
--

CREATE TABLE `data_obat` (
  `id` int(255) NOT NULL,
  `nama_obat` varchar(255) DEFAULT NULL,
  `stok` int(255) DEFAULT NULL,
  `harga` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `data_obat`
--

INSERT INTO `data_obat` (`id`, `nama_obat`, `stok`, `harga`) VALUES
(1, 'Alupurinol 100mg (tab)', 19, 'Rp. 400'),
(2, 'Amlodipine 10mg', 19, 'Rp. 4000'),
(3, 'Asam Afenamat 100mg (kaps)', 19, 'Rp. 4168'),
(4, 'Asam Afenamat 250mg (kaps)', 168, 'Rp. 4168'),
(5, 'Cetrizine', 18, 'Rp. 4168'),
(6, 'Cloropheminicol', 18, 'Rp. 4168'),
(7, 'Paracetamol 200mg (tab)', 19, 'Rp. 1000'),
(8, NULL, NULL, NULL),
(9, 'Bodrex (kapsul)', 68, 'Rp. 1000'),
(10, 'Panadol 200 mg', 90, 'Rp. 2100');

-- --------------------------------------------------------

--
-- Struktur dari tabel `data_pasien`
--

CREATE TABLE `data_pasien` (
  `id` varchar(255) NOT NULL,
  `kode_rm` varchar(150) DEFAULT NULL,
  `nama_pasien` varchar(100) DEFAULT NULL,
  `jenis_kelamin` varchar(32) DEFAULT NULL,
  `umur` int(23) DEFAULT NULL,
  `alamat` varchar(255) DEFAULT NULL,
  `pengobatan` varchar(255) DEFAULT NULL,
  `td` varchar(255) DEFAULT NULL,
  `diagnosa` varchar(255) DEFAULT NULL,
  `therapy` varchar(255) DEFAULT NULL,
  `bagian` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `data_pasien`
--

INSERT INTO `data_pasien` (`id`, `kode_rm`, `nama_pasien`, `jenis_kelamin`, `umur`, `alamat`, `pengobatan`, `td`, `diagnosa`, `therapy`, `bagian`) VALUES
('2b3f7be8-b5a3-4c44-89f6-43f84c9ae133', 'RM128976', 'Santa murella', 'perempuan', 23, 'aceh', 'BPJS', '168/76', 'diabetes', '-', 'DUKCAPIL'),
('4e4ec39c-86db-40ad-93a5-807e30fa53a9', 'RM120965', 'sasa', 'perempuan', 32, 'indonesia', 'BPJS', '176/60', 'test', 'test', 'Dukcapil'),
('8753b8ff-3094-46ba-9e3b-f6ad9746b65e', 'RM1000', 'susilonda', 'perempuan', 32, 'indonesia', 'BPJS', '176/60', 'test', 'test', 'Dukcapil');

-- --------------------------------------------------------

--
-- Struktur dari tabel `data_preception`
--

CREATE TABLE `data_preception` (
  `id` int(255) NOT NULL,
  `id_pasien` varchar(255) DEFAULT NULL,
  `kode_rm` varchar(255) DEFAULT NULL,
  `nama_pasien` varchar(255) DEFAULT NULL,
  `keluhan` varchar(255) DEFAULT NULL,
  `diagnosis` varchar(255) DEFAULT NULL,
  `therapy` varchar(255) DEFAULT NULL,
  `obat` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `data_preception`
--

INSERT INTO `data_preception` (`id`, `id_pasien`, `kode_rm`, `nama_pasien`, `keluhan`, `diagnosis`, `therapy`, `obat`) VALUES
(1, '2b3f7be8-b5a3-4c44-89f6-43f84c9ae133', 'RM00999', 'Santa murella', 'letih lunglai', 'diabetes', 'konsultasi, pengobatan', 'paracetamol'),
(3, '2b3f7be8-b5a3-4c44-89f6-43f84c9ae133', 'KP0008', 'Santa murella', 'demam', 'DBD', 'pengobatan, Konsultasi', 'paracetamol'),
(4, '2b3f7be8-b5a3-4c44-89f6-43f84c9ae133', 'RM120965', 'Santa murella', 'demam', 'DBD', 'konsultasi', 'paracetamol'),
(5, '2b3f7be8-b5a3-4c44-89f6-43f84c9ae133', 'RM120965', 'Santa murella', 'demam', 'demam', 'konsultasi', 'paracetamol');

-- --------------------------------------------------------

--
-- Struktur dari tabel `pasien_management`
--

CREATE TABLE `pasien_management` (
  `id` varchar(255) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `pasien_management`
--

INSERT INTO `pasien_management` (`id`, `username`, `email`, `nama`, `password`, `role`) VALUES
('b288218c-64b6-43cb-9a47-93437cfa4d25', '2b3f7be8-b5a3-4c44-89f6-43f84c9ae133', 'pasien1@gmail.com', 'randi', '$2a$10$e8ChhSUS2KJlt.m13rmzie4kjEAgi70bU2byGamYySG59CB8wz4xe', 'pasien');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user_management`
--

CREATE TABLE `user_management` (
  `id` varchar(255) NOT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `user_management`
--

INSERT INTO `user_management` (`id`, `nama`, `email`, `password`, `role`) VALUES
('35371a4e-7778-463d-af60-a06431ddb4de', 'user1', 'suster1@gmail.com', '$2a$10$./0yxamVcK9475oHte.wreieLSMIAZ5iBdJGt/MrxH.kYyqaBMJ/K', 'suster'),
('e19333ce-cfe2-4e41-be77-7fb90b99e68d', 'user 2', 'dokter1@gmail.com', '$2a$10$TfIktp71N6ER8KoIjwxjyeHndmcoKcYDo3kXKcvjbprXwQl5rRm6K', 'dokter');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `data_appointment`
--
ALTER TABLE `data_appointment`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `data_dokter`
--
ALTER TABLE `data_dokter`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `data_obat`
--
ALTER TABLE `data_obat`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `data_pasien`
--
ALTER TABLE `data_pasien`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `data_preception`
--
ALTER TABLE `data_preception`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `pasien_management`
--
ALTER TABLE `pasien_management`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `user_management`
--
ALTER TABLE `user_management`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `data_appointment`
--
ALTER TABLE `data_appointment`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT untuk tabel `data_dokter`
--
ALTER TABLE `data_dokter`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `data_obat`
--
ALTER TABLE `data_obat`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `data_preception`
--
ALTER TABLE `data_preception`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
