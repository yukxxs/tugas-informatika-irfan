function orderViaWA(paket) {
    const nomor = "6287849798520"; // Ganti dengan nomor WhatsApp kamu
    const pesan = `Halo Admin, saya ingin pesan hosting Maincraft:\nPaket: ${paket}`;
    const url = `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;
    window.open(url, '_blank');
  }
      const toggleBtn = document.getElementById("menuToggle");
    const sidebar = document.getElementById("sidebar");
    const closeBtn = document.getElementById("closeBtn");

    toggleBtn.onclick = () => sidebar.classList.add("open");
    closeBtn.onclick = () => sidebar.classList.remove("open");