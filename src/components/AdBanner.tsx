interface AdBannerProps {
  className?: string;
}

export default function AdBanner({ className = '' }: AdBannerProps) {
  return (
    <div className={`w-full bg-gray-100 border border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center text-gray-400 min-h-[120px] ${className}`}>
      <span className="text-xs font-bold tracking-widest uppercase mb-2">Advertisement</span>
      {/* 
        NOTE FOR DEVELOPER:
        Replace the content below with your actual ad network snippet (e.g., Google AdSense, Media.net, BuySellAds).
        Example AdSense:
        <ins className="adsbygoogle"
             style={{ display: "block" }}
             data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
             data-ad-slot="XXXXXXXXXX"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      */}
      <div className="flex items-center gap-2">
        <svg className="w-6 h-6 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span className="font-medium">Ad Space Placeholder</span>
      </div>
    </div>
  );
}
