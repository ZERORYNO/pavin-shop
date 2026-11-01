// Wait for DOM Content to Load completely
document.addEventListener('DOMContentLoaded', () => {

    // 1. Interactive Category Pill Selector Handler
    const categoryPills = document.querySelectorAll('.category-pill');

    categoryPills.forEach((btn) => {
        btn.addEventListener('click', function () {
            const parent = this.parentElement;

            // Reset all pills state
            parent.querySelectorAll('.category-pill').forEach((b) => {
                b.className = 'category-pill flex-shrink-0 px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 text-[13px] font-medium font-lao border border-slate-200/90 shadow-sm transition-all active:scale-95 flex items-center gap-1.5';
                const dot = b.querySelector('.rounded-full');
                if (dot) dot.remove();
            });

            // Set current pill active state
            this.className = 'category-pill flex-shrink-0 px-4 py-2 rounded-xl bg-onyx text-white text-[13px] font-semibold font-lao shadow-sm flex items-center gap-1.5 border border-onyx transition-all';
            
            if (!this.querySelector('.bg-emerald-400')) {
                const dot = document.createElement('span');
                dot.className = 'w-1.5 h-1.5 rounded-full bg-emerald-400';
                this.prepend(dot);
            }
        });
    });

    // 2. Interactive Wishlist Toggle Handler
    const wishlistBtns = document.querySelectorAll('.wishlist-btn');

    wishlistBtns.forEach((btn) => {
        btn.addEventListener('click', function () {
            this.classList.toggle('text-rose-500');
            this.classList.toggle('text-slate-400');
        });
    });

});