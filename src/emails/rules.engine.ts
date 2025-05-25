const BID_KEYWORDS = ['invitation to bid', 'request for proposal', 'tender', 'quotation', 'rfq', 'rfi'];

export function isBidEmail(content: string): boolean {
  return BID_KEYWORDS.some(keyword => content.toLowerCase().includes(keyword));
}
