const bootMessages = [
    { text: '[    0.000000] Linux version 6.12.0-arch1-1 (redinmatvey@linux-server) (gcc (GCC) 14.2.1) #1 SMP PREEMPT_DYNAMIC', type: '' },
    { text: '[    0.000000] Command line: BOOT_IMAGE=/vmlinuz-linux root=UUID=69420-... ro quiet', type: '' },
    { text: '[    0.000000] KERNEL supported cpus:', type: '' },
    { text: '[    0.000000]   Intel GenuineIntel', type: '' },
    { text: '[    0.000000]   AMD AuthenticAMD', type: '' },
    { text: '[    0.000000]   Hygon HygonGenuine', type: '' },
    { text: '[    0.000000]   Centaur CentaurHauls', type: '' },
    { text: '[    0.000000]   zhaoxin   Shanghai  ', type: '' },
    { text: '[    0.000000] e820: BIOS-provided physical RAM map:', type: '' },
    { text: '[    0.000000] BIOS-e820: [mem 0x0000000000000000-0x000000000009ffff] usable', type: 'ok' },
    { text: '[    0.000000] BIOS-e820: [mem 0x0000000000100000-0x00000000dfffffff] usable', type: 'ok' },
    { text: '[    0.000000] BIOS-e820: [mem 0x00000000f0000000-0x00000000ffffffff] reserved', type: 'warn' },
    { text: '[    0.000000] DMI: Supermicro X10DRi/T4, BIOS 3.4 05/15/2022', type: 'info' },
    { text: '[    0.000000] smpboot: Allowing 36 CPUs, 0 hotplug CPUs', type: '' },
    { text: '[    0.000000] setup_percpu: NR_CPUS: 36 nr_cpumask_bits: 36', type: '' },
    { text: '[    0.000000] percpu: Embedded 64 pages/cpu s229376 r8192 d28672 u262144', type: '' },
    { text: '[    0.000000] Built 1 zonelists, mobility grouping on.  Total pages: 16468992', type: '' },
    { text: '[    0.000000] Kernel command line: BOOT_IMAGE=/vmlinuz-linux root=UUID=69420-... ro quiet', type: '' },
    { text: '[    0.000000] Dentry cache hash table entries: 8388608 (order: 14, 67108864 bytes, linear)', type: '' },
    { text: '[    0.000000] Inode-cache hash table entries: 4194304 (order: 13, 33554432 bytes, linear)', type: '' },
    { text: '[    0.000000] Memory: 65874312K/67108864K available (16384K kernel code, 1234K rwdata, 4096K rodata, 2048K init, 1024K bss, 1234552K reserved, 0K cma-reserved)', type: 'ok' },
    { text: '[    0.000000] SLUB: HWalign=64, Order=0-3, MinObjects=0, CPUs=36, Nodes=2', type: '' },
    { text: '[    0.000000] ftrace: allocating 65536 entries in 256 pages', type: '' },
    { text: '[    0.000000] rcu: Preemptible hierarchical RCU implementation.', type: '' },
    { text: '[    0.000000] rcu:     RCU restricting CPUs from NR_CPUS=512 to nr_cpu_ids=36.', type: '' },
    { text: '[    0.000000] rcu:     RCU priority boosting: priority 1 delay 500 ms.', type: '' },
    { text: '[    0.000000] rcu:     RCU_SOFTIRQ processing moved to rcuc kthreads.', type: '' },
    { text: '[    0.000000] NR_IRQS: 32768, nr_irqs: 1088, preallocated irqs: 16', type: '' },
    { text: '[    0.000000] random: crng init done', type: 'ok' },
    { text: '[    0.000000] Console: colour VGA+ 80x25', type: '' },
    { text: '[    0.000000] printk: console [tty0] enabled', type: 'ok' },
    { text: '[    0.000000] ACPI: Core revision 20240322', type: 'info' },
    { text: '[    0.000000] clocksource: hpet: mask: 0xffffffff max_cycles: 0xffffffff, max_idle_ns: 63708609828 ns', type: '' },
    { text: '[    0.000000] tsc: Detected 2300.000 MHz processor', type: '' },
    { text: '[    0.000000] tsc: Detected 2299.968 MHz TSC', type: '' },
    { text: '[    0.000000] [Firmware Bug]: TSC ADJUST differs: Reference CPU0: 0, CPU1: -1234', type: 'warn' },
    { text: '[    0.000000] pci 0000:00:00.0: [8086:6f00] type 00 class 0x060000', type: 'info' },
    { text: '[    0.000000] pci 0000:00:01.0: [8086:6f02] type 01 class 0x060400', type: '' },
    { text: '[    0.000000] pci 0000:00:02.0: [8086:6f04] type 01 class 0x060400', type: '' },
    { text: '[    0.000000] pci 0000:00:03.0: [8086:6f08] type 01 class 0x060400', type: '' },
    { text: '[    0.000000] pci 0000:01:00.0: [10de:1bb1] type 00 class 0x030000', type: 'info' },
    { text: '[    0.000000] pci 0000:01:00.0: NVIDIA Quadro P4000', type: 'ok' },
    { text: '[    0.000000] pci 0000:00:1f.0: [8086:8d44] type 00 class 0x060100', type: '' },
    { text: '[    0.000000] pci 0000:00:1f.2: [8086:8d02] type 00 class 0x010601', type: '' },
    { text: '[    0.000000] pci 0000:00:1f.3: [8086:8d22] type 00 class 0x0c0500', type: '' },
    { text: '[    0.000000] ahci 0000:00:1f.2: AHCI 0001.0300 32 slots 6 ports 6 Gbps 0x3f impl SATA mode', type: 'ok' },
    { text: '[    0.000000] ahci 0000:00:1f.2: flags: 64bit ncq pm led clo only pio slum part sxs deso', type: '' },
    { text: '[    0.000000] scsi host0: ahci', type: '' },
    { text: '[    0.000000] scsi host1: ahci', type: '' },
    { text: '[    0.000000] scsi host2: ahci', type: '' },
    { text: '[    0.000000] scsi host3: ahci', type: '' },
    { text: '[    0.000000] scsi host4: ahci', type: '' },
    { text: '[    0.000000] scsi host5: ahci', type: '' },
    { text: '[    0.000000] ata1: SATA max UDMA/133 abar m2048@0xf7e30000 port 0xf7e30100 irq 32', type: '' },
    { text: '[    0.000000] ata2: SATA max UDMA/133 abar m2048@0xf7e30000 port 0xf7e30180 irq 32', type: '' },
    { text: '[    0.000000] ata3: SATA max UDMA/133 abar m2048@0xf7e30000 port 0xf7e30200 irq 32', type: '' },
    { text: '[    0.000000] ata4: SATA max UDMA/133 abar m2048@0xf7e30000 port 0xf7e30280 irq 32', type: '' },
    { text: '[    0.000000] ata5: SATA max UDMA/133 abar m2048@0xf7e30000 port 0xf7e30300 irq 32', type: '' },
    { text: '[    0.000000] ata6: SATA max UDMA/133 abar m2048@0xf7e30000 port 0xf7e30380 irq 32', type: '' },
    { text: '[    0.000000] ata1: SATA link up 6.0 Gbps (SStatus 133 SControl 300)', type: 'ok' },
    { text: '[    0.000000] ata1.00: ATA-10: Samsung SSD 860 EVO, RVT04B6Q, max UDMA/133', type: '' },
    { text: '[    0.000000] ata1.00: 1953525168 sectors, multi 16: LBA48 NCQ (depth 32), AA', type: '' },
    { text: '[    0.000000] ata1.00: configured for UDMA/133', type: 'ok' },
    { text: '[    0.000000] scsi 0:0:0:0: Direct-Access     ATA      Samsung SSD 860  Q3J0 PQ: 0 ANSI: 5', type: '' },
    { text: '[    0.000000] sd 0:0:0:0: [sda] 1953525168 512-byte logical blocks: (1.00 TB/932 GiB)', type: '' },
    { text: '[    0.000000] sd 0:0:0:0: [sda] Write Protect is off', type: '' },
    { text: '[    0.000000] sd 0:0:0:0: [sda] Mode Sense: 00 3a 00 00', type: '' },
    { text: '[    0.000000] sd 0:0:0:0: [sda] Write cache: enabled, read cache: enabled, doesn\'t support DPO or FUA', type: '' },
    { text: '[    0.000000] sda: sda1 sda2 sda3', type: '' },
    { text: '[    0.000000] sd 0:0:0:0: [sda] Attached SCSI disk', type: 'ok' },
    { text: '[    0.000000] EXT4-fs (sda2): mounted filesystem with ordered data mode. Quota mode: none.', type: 'ok' },
    { text: '[    0.000000] systemd[1]: systemd 256.5-1-arch running in system mode (+PAM +AUDIT +SELINUX +APPARMOR +IMA +SMACK +SECCOMP +GCRYPT +GNUTLS +OPENSSL +ACL +BLKID +CURL +ELFUTILS +FIDO2 +IDN2 -IDN +IPTC +KMOD +LIBCRYPTSETUP +LIBFDISK +PCRE2 +PWQUALITY +P11KIT +QRENCODE +TPM2 +BZIP2 +LZ4 +XZ +ZLIB +ZSTD +BPF_FRAMEWORK +XKBCOMMON +UTMP +SYSVINIT default-hierarchy=unified)', type: 'info' },
    { text: '[    0.000000] systemd[1]: Detected architecture x86-64.', type: '' },
    { text: '[    0.000000] systemd[1]: Hostname set to <linux-server>.', type: '' },
    { text: '[    0.000000] systemd[1]: Initializing machine ID from random generator.', type: '' },
    { text: '[    0.000000] systemd[1]: Queued start job for default target graphical.target.', type: '' },
    { text: '[    0.000000] systemd[1]: Created slice system-getty.slice - Slice /system/getty.', type: 'ok' },
    { text: '[    0.000000] systemd[1]: Created slice system-modprobe.slice - Slice /system/modprobe.', type: 'ok' },
    { text: '[    0.000000] systemd[1]: Created slice system-sshd.slice - Slice /system/sshd.', type: 'ok' },
    { text: '[    0.000000] systemd[1]: Started systemd-ask-password-console.path - Dispatch Password Requests to Console Directory Watch.', type: 'ok' },
    { text: '[    0.000000] systemd[1]: Started systemd-ask-password-wall.path - Forward Password Requests to Wall Directory Watch.', type: 'ok' },
    { text: '[    0.000000] systemd[1]: Set up automount proc-sys-fs-binfmt_misc.automount - Arbitrary Executable File Formats File System Automount Point.', type: '' },
    { text: '[    0.000000] systemd[1]: Reached target integritysetup.target - Local Integrity Protected Volumes.', type: 'ok' },
    { text: '[    0.000000] systemd[1]: Reached target nss-user-lookup.target - User and Group Name Lookups.', type: 'ok' },
    { text: '[    0.000000] systemd[1]: Reached target remote-fs.target - Remote File Systems.', type: 'ok' },
    { text: '[    0.000000] systemd[1]: Reached target slices.target - Slice Units.', type: 'ok' },
    { text: '[    0.000000] systemd[1]: Reached target swap.target - Swaps.', type: 'ok' },
    { text: '[    0.000000] systemd[1]: Reached target timers.target - Timer Units.', type: 'ok' },
    { text: '[    0.000000] systemd[1]: Listening on systemd-coredump.socket - Process Core Dump Socket.', type: '' },
    { text: '[    0.000000] systemd[1]: Listening on systemd-initctl.socket - initctl Compatibility Named Pipe.', type: '' },
    { text: '[    0.000000] systemd[1]: Listening on systemd-journald-dev-log.socket - Journal Socket (/dev/log).', type: '' },
    { text: '[    0.000000] systemd[1]: Listening on systemd-journald.socket - Journal Socket.', type: '' },
    { text: '[    0.000000] systemd[1]: Listening on systemd-networkd.socket - Network Service Netlink Socket.', type: '' },
    { text: '[    0.000000] systemd[1]: Listening on systemd-udevd-control.socket - udev Control Socket.', type: '' },
    { text: '[    0.000000] systemd[1]: Listening on systemd-udevd-kernel.socket - udev Kernel Socket.', type: '' },
    { text: '[    0.000000] systemd[1]: Mounting dev-hugepages.mount - Huge Pages File System...', type: '' },
    { text: '[    0.000000] systemd[1]: Mounting dev-mqueue.mount - POSIX Message Queue File System...', type: '' },
    { text: '[    0.000000] systemd[1]: Mounting sys-kernel-debug.mount - Kernel Debug File System...', type: '' },
    { text: '[    0.000000] systemd[1]: Mounting sys-kernel-tracing.mount - Kernel Trace File System...', type: '' },
    { text: '[    0.000000] systemd[1]: Starting kmod-static-nodes.service - Create List of Static Device Nodes...', type: '' },
    { text: '[    0.000000] systemd[1]: Starting modprobe@configfs.service - Load Kernel Module configfs...', type: '' },
    { text: '[    0.000000] systemd[1]: Starting modprobe@dm_mod.service - Load Kernel Module dm_mod...', type: '' },
    { text: '[    0.000000] systemd[1]: Starting modprobe@drm.service - Load Kernel Module drm...', type: '' },
    { text: '[    0.000000] systemd[1]: Starting modprobe@efi_pstore.service - Load Kernel Module efi_pstore...', type: '' },
    { text: '[    0.000000] systemd[1]: Starting modprobe@fuse.service - Load Kernel Module fuse...', type: '' },
    { text: '[    0.000000] systemd[1]: Starting modprobe@loop.service - Load Kernel Module loop...', type: '' },
    { text: '[    0.000000] systemd[1]: Starting systemd-journald.service - Journal Service...', type: '' },
    { text: '[    0.000000] systemd[1]: Starting systemd-modules-load.service - Load Kernel Modules...', type: '' },
    { text: '[    0.000000] systemd[1]: Starting systemd-remount-fs.service - Remount Root and Kernel File Systems...', type: '' },
    { text: '[    0.000000] systemd[1]: Starting systemd-udev-trigger.service - Coldplug All udev Devices...', type: '' },
    { text: '[    0.000000] systemd[1]: Mounted dev-hugepages.mount - Huge Pages File System.', type: 'ok' },
    { text: '[    0.000000] systemd[1]: Mounted dev-mqueue.mount - POSIX Message Queue File System.', type: 'ok' },
    { text: '[    0.000000] systemd[1]: Mounted sys-kernel-debug.mount - Kernel Debug File System.', type: 'ok' },
    { text: '[    0.000000] systemd[1]: Mounted sys-kernel-tracing.mount - Kernel Trace File System.', type: 'ok' },
    { text: '[    0.000000] systemd[1]: Finished kmod-static-nodes.service - Create List of Static Device Nodes.', type: 'ok' },
    { text: '[    0.000000] systemd[1]: modprobe@configfs.service: Deactivated successfully.', type: 'ok' },
    { text: '[    0.000000] systemd[1]: Finished modprobe@configfs.service - Load Kernel Module configfs.', type: 'ok' },
    { text: '[    0.000000] systemd[1]: modprobe@dm_mod.service: Deactivated successfully.', type: 'ok' },
    { text: '[    0.000000] systemd[1]: Finished modprobe@dm_mod.service - Load Kernel Module dm_mod.', type: 'ok' },
    { text: '[    0.000000] systemd[1]: modprobe@drm.service: Deactivated successfully.', type: 'ok' },
    { text: '[    0.000000] systemd[1]: Finished modprobe@drm.service - Load Kernel Module drm.', type: 'ok' },
    { text: '[    0.000000] systemd[1]: modprobe@efi_pstore.service: Deactivated successfully.', type: 'ok' },
    { text: '[    0.000000] systemd[1]: Finished modprobe@efi_pstore.service - Load Kernel Module efi_pstore.', type: 'ok' },
    { text: '[    0.000000] systemd[1]: modprobe@fuse.service: Deactivated successfully.', type: 'ok' },
    { text: '[    0.000000] systemd[1]: Finished modprobe@fuse.service - Load Kernel Module fuse.', type: 'ok' },
    { text: '[    0.000000] systemd[1]: modprobe@loop.service: Deactivated successfully.', type: 'ok' },
    { text: '[    0.000000] systemd[1]: Finished modprobe@loop.service - Load Kernel Module loop.', type: 'ok' },
    { text: '[    0.000000] systemd[1]: Finished systemd-modules-load.service - Load Kernel Modules.', type: 'ok' },
    { text: '[    0.000000] systemd[1]: Finished systemd-remount-fs.service - Remount Root and Kernel File Systems.', type: 'ok' },
    { text: '[    0.000000] systemd[1]: Reached target local-fs-pre.target - Preparation for Local File Systems.', type: 'ok' },
    { text: '[    0.000000] systemd[1]: Mounting sys-kernel-config.mount - Kernel Configuration File System...', type: '' },
    { text: '[    0.000000] systemd[1]: Starting systemd-sysctl.service - Apply Kernel Variables...', type: '' },
    { text: '[    0.000000] systemd[1]: Mounted sys-kernel-config.mount - Kernel Configuration File System.', type: 'ok' },
    { text: '[    0.000000] systemd[1]: Finished systemd-sysctl.service - Apply Kernel Variables.', type: 'ok' },
    { text: '[    0.000000] systemd[1]: Started systemd-journald.service - Journal Service.', type: 'ok' },
    { text: '[    0.000000] systemd-journald[123]: Received client request to flush runtime journal.', type: '' },
    { text: '[    0.000000] systemd-journald[123]: /var/log/journal/69420.../system.journal: Journal file uses a different sequence number ID, rotating.', type: '' },
    { text: '[    0.000000] systemd-journald[123]: Rotating system journal.', type: '' },
    { text: '[    0.000000] systemd[1]: Starting systemd-random-seed.service - Load/Save Random Seed...', type: '' },
    { text: '[    0.000000] systemd[1]: Started systemd-random-seed.service - Load/Save Random Seed.', type: 'ok' },
    { text: '[    0.000000] systemd[1]: Finished systemd-udev-trigger.service - Coldplug All udev Devices.', type: 'ok' },
    { text: '[    0.000000] systemd[1]: Starting systemd-udevd.service - Rule-based Manager for Device Events and Files...', type: '' },
    { text: '[    0.000000] systemd[1]: Started systemd-udevd.service - Rule-based Manager for Device Events and Files.', type: 'ok' },
    { text: '[    0.000000] systemd[1]: Starting systemd-logind.service - User Login Management...', type: '' },
    { text: '[    0.000000] systemd[1]: Started systemd-logind.service - User Login Management.', type: 'ok' },
    { text: '[    0.000000] systemd[1]: Starting sshd.service - OpenSSH Daemon...', type: '' },
    { text: '[    0.000000] systemd[1]: Started sshd.service - OpenSSH Daemon.', type: 'ok' },
    { text: '[    0.000000] systemd[1]: Starting docker.service - Docker Application Container Engine...', type: '' },
    { text: '[    0.000000] systemd[1]: Started docker.service - Docker Application Container Engine.', type: 'ok' },
    { text: '[    0.000000] systemd[1]: Starting nginx.service - A high performance web server and a reverse proxy server...', type: '' },
    { text: '[    0.000000] systemd[1]: Started nginx.service - A high performance web server and a reverse proxy server.', type: 'ok' },
    { text: '[    0.000000] systemd[1]: Reached target multi-user.target - Multi-User System.', type: 'ok' },
    { text: '[    0.000000] systemd[1]: Reached target graphical.target - Graphical Interface.', type: 'ok' },
    { text: '[    0.000000] systemd[1]: Startup finished in 2.345s (kernel) + 4.567s (initrd) + 6.789s (userspace) = 13.701s.', type: 'ok' },
    { text: '', type: '' },
    { text: 'Welcome to Linux Server 6.12.0-arch1-1', type: '' },
    { text: 'Kernel: 6.12.0-arch1-1 #1 SMP PREEMPT_DYNAMIC x86_64 GNU/Linux', type: '' },
    { text: '', type: '' },
    { text: 'Linux Server ready.', type: 'ok' },
];

let messageIndex = 0;
const bootLog = document.getElementById('boot-log');
const bootPrompt = document.getElementById('boot-prompt');
const bootScreen = document.getElementById('boot-screen');
const mainSite = document.getElementById('main-site');
let isBootComplete = false;

function typeBootMessage() {
    if (messageIndex >= bootMessages.length) {
        isBootComplete = true;
        bootPrompt.style.display = 'block';
        return;
    }

    const msg = bootMessages[messageIndex];
    const line = document.createElement('div');

    if (msg.type) {
        line.className = msg.type;
    }

    line.textContent = msg.text;
    bootLog.appendChild(line);
    bootLog.scrollTop = bootLog.scrollHeight;

    messageIndex++;
    const delay = msg.text.length > 50 ? 30 : 50;
    setTimeout(typeBootMessage, delay);
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && isBootComplete) {
        bootScreen.style.display = 'none';
        mainSite.style.display = 'block';
        document.body.style.overflow = 'auto';
    }
});

// Старт загрузки
window.onload = () => {
    setTimeout(typeBootMessage, 200);
};
