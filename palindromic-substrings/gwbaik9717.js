// Time complexity: O(n^2)
// Space complexity: O(n^2)

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  const n = s.length;
  const dp = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => false)
  );

  for (let end = 0; end < n; end++) {
    for (let start = end; start >= 0; start--) {
      if (start === end) {
        dp[start][end] = true;
        continue;
      }

      if (start + 1 === end) {
        if (s[start] === s[end]) {
          dp[start][end] = true;
        }
        continue;
      }

      if (s[start] === s[end] && dp[start + 1][end - 1]) {
        dp[start][end] = true;
        continue;
      }
    }
  }

  let answer = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (dp[i][j]) {
        answer++;
      }
    }
  }

  return answer;
};
